const en = {
	Header: {
		Title: "Hi, I'm Heriberto",
		Subtitle: "and i love coding in ",
		Carousel: [
			"TypeScript.",
			"JavaScript.",
			"Python.",
			"Java.",
			"C++.",
			"C.",
			"C#.",
			"Ruby.",
			"HTML.",
			"CSS.",
		],
	},
	Education: {
		Title: "Education",
		Subtitle:
			"Tec de Monterrey - Bachelor of Science in Computer Science and Technology Engineering",
		Date: "August 2018 - July 2023",
		GPA: "GPA: 89/100",
		Courses:
			"Relevant courses includes: Data structures, Analysis and Design of Algorithms, Operative Systems, Compiler Design, Advanced Databases, Computer Networks, Project Administration.",
	},
	Experience: {
		Title: "Experience",
		Items: [
			{
				Title: "Full-Stack Developer @Blue People",
				Time: "Feb 2022 - Current",
				Description: [
					"Develop variety of web and mobile apps (React/React Native) used by companies to manage internal administration services.",
					"Work within a multidisciplinary team during project development providing technical advice during planning phases.",
					"Tech Leadership during final stages of project and mentoring new employees for the project.",
				],
			},
			{
				Title: "Full-Stack Developer @Freelance",
				Time: "Feb 2021 - Jun 2021",
				Description: [
					"Design and Develop web apps (React) on demand for small business needs.",
					"Working on tight schedule and managing scope and requirements of client.",
				],
			},
			{
				Title: "Jr. Software Engineer @SES",
				Time: "Jan 2019 - Feb 2022",
				Description: [
					"Design, Develop and Maintain web apps (React) for internal management software systems.",
					"Develop automation (Python/C++) and analysis tools (React) for accounting management.",
				],
			},
		],
	},
	Projects: {
		Title: "Featured Projects",
		Items: [
			{
				Title: "Portfolio Web Page",
				Time: "2022",
				Img: "Portfolio.jpg",
				Description:
					"Personal portfolio website to concentrate information from previous work and educational experiences, as well as projects of interest. Developed with Typescript and React, deployed on AWS.",
				Tags: ["Typescript", "React", "MaterialUI", "AWS"],
				RepoLinks: [
					{
						Label: "Github",
						Type: "Github",
						Link: "https://github.com/HeribertoGM/Portfolio-v2.0",
					},
				],
			},
			{
				Title: "Palaunu++",
				Time: "2021",
				Img: "Palaunu.png",
				Description:
					"Custom compiler for the execution of a tailor-made programming language based on C++ syntax and the structure of the JVM for Java. Developed in Python with the Lex-Yacc library.",
				Tags: ["Python", "Lex-Yacc", "Compiler"],
				RepoLinks: [
					{
						Label: "Github",
						Type: "Github",
						Link: "https://github.com/HeribertoGM/Proyecto_Compiladores",
					},
				],
			},
			{
				Title: "ZONAMACO app",
				Time: "2021",
				Img: "zonamaco.jpg",
				Description:
					"iOS and Web app designed for ZONAMACO art fair, it allows users to get information from exhibitors, art pieces on display and event schedule within the fair. Developed with Swift (iOS app), Javascript and React (data management website) and Firebase (back-end).",
				Tags: [
					"Swift",
					"UIKit",
					"Javascript",
					"React",
					"Firebase",
					"iOS",
					"Web",
				],
				RepoLinks: [
					{
						Label: "AppStore (iOS)",
						Type: "Link",
						Link: "https://apps.apple.com/ai/app/z-onamaco/id1601743483",
					},
				],
			},
			{
				Title: "Equilibrio Rotacional",
				Time: "2021",
				Img: "equilibrio.jpg",
				Description:
					"Learning app designed for students to ease the learning of torque and rotational equilibrium concepts, includes an environment that simulates mass and gravity. Developed for iOS with Swift and SpriteKit.",
				Tags: ["Swift", "UIKit", "SpriteKit", "iOS"],
				RepoLinks: [
					{
						Label: "Github",
						Type: "Github",
						Link: "https://github.com/RicarlOz/Fisica-Equilibrio",
					},
					{
						Label: "AppStore (iOS)",
						Type: "Link",
						Link: "https://apps.apple.com/us/app/itc-mty-equilibrio-rotacional/id1574209508",
					},
				],
			},
			{
				Title: "Breaker",
				Time: "2020",
				Img: "breaker.jpg",
				Description:
					"New version of the classic game Block Breaker, support different maps, save/load game and custom boosts for player. Developed from scratch with Java programming language.",
				Tags: ["Java", "", "Video Game"],
				RepoLinks: [
					{
						Label: "Github",
						Type: "Github",
						Link: "https://github.com/RicarlOz/Breaker",
					},
				],
			},
		],
	},
	Skills: {
		Title: "Skills",
		Skills: [
			{ name: "Python", years: 5, skill: 5, type: "language" },
			{ name: "TypeScript", years: 2, skill: 5, type: "language" },
			{ name: "JavaScript", years: 5, skill: 5, type: "language" },
			{ name: "C++", years: 6, skill: 4, type: "language" },
			{ name: "Java", years: 3, skill: 4, type: "language" },
			{ name: "SQL", years: 4, skill: 5, type: "language" },
			{ name: "C", years: 3, skill: 3, type: "language" },
			{ name: "BashScript", years: 3, skill: 4, type: "language" },
			{ name: "Ruby", years: 1, skill: 2, type: "language" },
			{ name: "Racket", years: 1, skill: 2, type: "language" },
			{ name: "AWS", years: 1, skill: 5, type: "cloud" },
			{ name: "Firebase", years: 2, skill: 4, type: "cloud" },
			{ name: "p5.js", years: 3, skill: 5, type: "framework" },
			{ name: "React", years: 3, skill: 5, type: "framework" },
			{ name: "React Native", years: 1, skill: 5, type: "framework" },
			{ name: "Next.js", years: 1, skill: 4, type: "framework" },
			{ name: "Bootstrap", years: 3, skill: 4, type: "framework" },
			{ name: "Vue", years: 1, skill: 1, type: "framework" },
			{ name: "Angular", years: 1, skill: 1, type: "framework" },
			{ name: "ExpressJS", years: 4, skill: 5, type: "framework" },
			{ name: "Linux", years: 5, skill: 5, type: "other" },
			{ name: "Git", years: 5, skill: 5, type: "other" },
			{ name: "Docker", years: 3, skill: 3, type: "other" },
		],
		TypeSectionsTitles: {
			language: "Languages",
			framework: "Frameworks",
			cloud: "Cloud Providers",
			other: "Others",
		},
	},
	Footer: {
		Text: "Made by: HeribertoGM - 2023",
	},
};

export default en;
