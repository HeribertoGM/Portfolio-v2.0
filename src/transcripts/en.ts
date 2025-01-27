const en = {
	Header: {
		Title: "Hi, I'm Heriberto",
		Subtitle: "and I love coding in ",
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
		DateStart: "August 2017",
		DateEnd: "July 2023",
		GPA: "GPA: 89/100",
		Courses:
			"Relevant courses includes: Data structures, Analysis and Design of Algorithms, Operative Systems, Compiler Design, Advanced Databases, Computer Networks, Project Administration.",
	},
	Experience: {
		Title: "Experience",
		Items: [
			{
				Title: "Fire Alarm Systems Support Engineer @SIELSE",
				TimeStart: "Ago 2024",
				TimeEnd: "Current",
				Description:
					"Certified specialist in Simplex fire alarm systems (4007, 4010, and 4100 panels) with expertise in providing technical support, programming, and maintenance for commercial and industrial sites.",
				Bullets: [
					"Conducted training sessions for client staff on system operation and maintenance, enhancing user confidence and system autonomy.",
					"Performed routine diagnostics and preventative maintenance, reducing system downtime by 30%.",
					"Provided on-site and remote support, resolving 90% of issues within the first response.",
				],
			},
			{
				Title: "Full Stack Developer @Blue People",
				TimeStart: "Feb 2022",
				TimeEnd: "May 2024",
				Description:
					"Software engineer specialized in full stack web and mobile development using React and React Native for the front end, and AWS services for the back end. Primarily worked with JavaScript, TypeScript, and Python.",
				Bullets: [
					"Programmed, tested, and deployed 6 web/mobile projects used by up to 10,000 individual users and industry solutions for clients in Mexico and US.",
					"Provided technical advice and time estimations for project management and planning on a 2-week ahead planning with a reliability of more than 80% for time estimations.",
					"Trained and mentored new employees while maintaining the Tech leadership of 3 projects on 3-4 member teams.",
				],
			},
			{
				Title: "Full Stack Developer @Freelance",
				TimeStart: "Feb 2021",
				TimeEnd: "Jun 2021",
				Description:
					"Full Stack Developer specialized in creating web pages and software solutions for small businesses based on Ramos Arizpe, Coah. Primarily worked with JavaScript, and Python.",
				Bullets: [
					"Identified growth opportunities for small businesses by increasing audience reachability.",
					"Prototyped, developed, and deployed web applications used to increase communication channels with their target market by an estimated 30%.",
					"Managed a software development project using an agile-like methodology for a 4-weekper project planning.",
				],
			},
			{
				Title: "Jr. Software Engineer @SIELSE",
				TimeStart: "Jan 2018",
				TimeEnd: "Feb 2022",
				Description:
					"Software engineer focused on identifying opportunities for process optimization within the company and developing software tools to address them. Utilized automation pipelines on Linux servers, as well as database design and administration. Primarily worked with JavaScript, Python, C++, and Bash Script.",
				Bullets: [
					"Designed and developed 3 major applications for the management and sorting of materials warehouses, reducing warehouse management times by 80% and manpower needed by 50%.",
					"Led the development of software tools for analysis and automation of accounting processes within the company to improve by 30% the efficiency in planning times for annual tax returns.",
				],
			},
		],
	},
	Projects: {
		Title: "Featured Projects",
		Items: [
			{
				Title: "Portfolio Web Page",
				Time: "2024",
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
				RepoLinks: [],
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
			{ name: "Python", skill: 5, type: "language" },
			{ name: "TypeScript", skill: 5, type: "language" },
			{ name: "JavaScript", skill: 5, type: "language" },
			{ name: "C++", skill: 4, type: "language" },
			{ name: "Java", skill: 4, type: "language" },
			{ name: "SQL", skill: 5, type: "language" },
			{ name: "C", skill: 3, type: "language" },
			{ name: "BashScript", skill: 4, type: "language" },
			{ name: "Ruby", skill: 2, type: "language" },
			{ name: "Racket", skill: 2, type: "language" },
			{ name: "AWS", skill: 5, type: "cloud" },
			{ name: "Firebase", skill: 4, type: "cloud" },
			{ name: "p5.js", skill: 5, type: "framework" },
			{ name: "React", skill: 5, type: "framework" },
			{ name: "React Native", skill: 5, type: "framework" },
			{ name: "Next.js", skill: 4, type: "framework" },
			{ name: "Bootstrap", skill: 4, type: "framework" },
			{ name: "Vue", skill: 1, type: "framework" },
			{ name: "Angular", skill: 1, type: "framework" },
			{ name: "ExpressJS", skill: 5, type: "framework" },
			{ name: "Linux", skill: 5, type: "other" },
			{ name: "Git", skill: 5, type: "other" },
			{ name: "Docker", skill: 3, type: "other" },
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
