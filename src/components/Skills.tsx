import { Container, Typography } from "@mui/material";
import {
	ReactP5Wrapper,
	P5CanvasInstance,
	SketchProps,
} from "@p5-wrapper/react";

import { props } from "../types";
import {
	skills_transcript_object,
	skills_item_object,
} from "../transcripts_types";
import { getTranscript } from "../transcripts";
import SkillStyles from "../styles/Skill";

type MySketchProps = SketchProps & {
	data: skills_item_object[];
};

function sketch(p5: P5CanvasInstance<MySketchProps>) {
	let c2 = require("c2.js");
	let p5width = p5.windowWidth * 0.9;
	let p5height = p5.windowHeight * 0.85;
	p5width = p5width > 1200 ? 1200 : p5width;
	p5height = p5height > 900 ? 900 : p5height;

	let filtering: string = "";

	let skills: skills_item_object[] = [];
	let types: { [key: string]: string } = {};

	let world: any = new c2.World(new c2.Rect(0, 0, p5width, p5height));
	let quadTree: any;
	let legend: any = {};

	let renderParticle = (p: any) => {
		//bubble
		p5.stroke("#333333");
		p5.strokeWeight(1);
		p5.fill(!filtering || filtering === p.type ? p.color : "#CDCDCD");
		p5.circle(p.position.x, p.position.y, p.radius);
		//text
		p5.noStroke();
		p5.fill(0);
		p5.textSize(16);
		p5.textAlign(p5.CENTER, p5.CENTER);
		p5.text(p.tag, p.position.x, p.position.y);
	};

	let renderLegend = (legend: any) => {
		let middle_x = Math.floor((2 * legend.box.p.x + legend.box.w) / 2);
		p5.stroke(0);
		p5.strokeWeight(1);
		p5.fill(255);
		p5.rect(legend.box.p.x, legend.box.p.y, legend.box.w, legend.box.h);

		p5.fill(0);
		p5.noStroke();
		p5.textSize(22);
		p5.text(legend.title, middle_x, legend.box.p.y + 35);

		p5.stroke(1);
		p5.line(
			legend.box.p.x + 25,
			legend.box.p.y + 60,
			legend.box.p.x + legend.box.w - 25,
			legend.box.p.y + 60
		);

		let left_ref = middle_x - legend.box.w / 3;
		for (let i = 0; i < legend.data.length; i++) {
			p5.fill(legend.data[i].color);
			p5.stroke(1);
			p5.rect(left_ref, legend.box.p.y + 52 + (i + 1) * 30, 15, 15);

			p5.fill(0);
			p5.noStroke();
			p5.textSize(16);
			p5.textAlign(p5.LEFT);
			p5.text(
				legend.data[i].text,
				left_ref + 30,
				legend.box.p.y + 60 + (i + 1) * 30
			);
			filter(
				legend.box.p.x,
				legend.box.p.y + 52 + (i + 1) * 30,
				legend.box.p.x + legend.box.w,
				legend.box.p.y + 67 + (i + 1) * 30,
				legend.data[i].key
			);
		}
	};

	let filter = (
		x1: number,
		y1: number,
		x2: number,
		y2: number,
		key: string
	) => {
		if (
			x1 < p5.mouseX &&
			p5.mouseX < x2 &&
			y1 < p5.mouseY &&
			p5.mouseY < y2
		) {
			filtering = key;
		} else if (
			legend.box.p.x > p5.mouseX ||
			p5.mouseX > legend.box.p.x + legend.box.w ||
			legend.box.p.y > p5.mouseY ||
			p5.mouseY > legend.box.p.y + legend.box.h
		) {
			filtering = "";
		}
	};

	p5.setup = () => {
		p5.createCanvas(p5width, p5height);
		p5.ellipseMode(p5.RADIUS);

		quadTree = new c2.QuadTree(new c2.Rect(0, 0, p5.width, p5.height));
		let collision = new c2.Collision(quadTree);
		world.addInteractionForce(collision);

		let constForce = new c2.ConstForce(0, 1);
		world.addForce(constForce);

		legend.box = new c2.Rect(p5.width - 220, 20, 200, 220);
		let rectConstraint = new c2.PolygonConstraint(legend.box);
		world.addConstraint(rectConstraint);
	};

	p5.draw = () => {
		p5.background(38, 81, 117);

		renderLegend(legend);

		world.update();

		for (let i = 0; i < world.particles.length; i++) {
			let p = world.particles[i];
			renderParticle(p);
		}
	};

	p5.mousePressed = () => {
		world.removeForce(world.forces[0]);
		let pointField = new c2.PointField(
			new c2.Point(p5.mouseX, p5.mouseY),
			1
		);
		world.addForce(pointField);
	};

	p5.mouseDragged = () => {
		world.removeForce(world.forces[0]);
		let pointField = new c2.PointField(
			new c2.Point(p5.mouseX, p5.mouseY),
			2
		);
		world.addForce(pointField);
	};

	p5.mouseReleased = () => {
		world.removeForce(world.forces[0]);
		let constForce = new c2.ConstForce(0, 1);
		world.addForce(constForce);
	};

	p5.windowResized = () => {
		p5.resizeCanvas(p5width, p5height);
	};

	p5.updateWithProps = (props: any) => {
		if (props.data) {
			types = props.data.TypeSectionsTitles;
			let colors = ["#CC5054", "#6395ED", "#C8B8FF", "#76C893"];
			let scheme: any = {};
			let keys = Object.keys(types);
			for (let i = 0; i < keys.length; i++) {
				scheme[keys[i]] = colors[i];
			}
			legend.title = "Skill type";
			legend.data = Object.keys(types).map((key, i) => {
				return { key, text: types[key], color: colors[i] };
			});

			skills = props.data.Skills;
			for (let i = 0; i < skills.length; i++) {
				let x = p5.random(p5width);
				let y = p5.random(p5height);
				let p = new c2.Particle(x, y);
				p.radius = 20 + skills[i].skill * 10;
				p.color = scheme[skills[i].type];
				p.tag = skills[i].name;
				p.type = skills[i].type;

				world.addParticle(p);
			}
		}
	};
}

function Skills({ language }: props): JSX.Element {
	const data: skills_transcript_object = getTranscript[language].Skills;

	return (
		<Container
			id={"skills"}
			sx={SkillStyles.SectionContainer}
			maxWidth={false}
			disableGutters={true}
		>
			<Typography variant="h3" sx={SkillStyles.Title}>
				{data.Title}
			</Typography>
			<hr style={SkillStyles.Divider} />
			<ReactP5Wrapper sketch={sketch} data={data} />
		</Container>
	);
}

export default Skills;
