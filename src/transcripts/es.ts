import { transcript } from "../types";

const es: transcript = {
	Header: {
		Title: "Hola, soy Heriberto",
		Subtitle: "y me gusta programar en ",
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
		Title: "Educación",
		Subtitle:
			"Tec de Monterrey - Ingeniería en Tecnologías Computacionales",
		Date: "Agosto 2018 - Julio 2023",
		GPA: "Promedio: 89/100",
		Courses:
			"Materias Relevantes: Estructura de Datos, Análisis y Diseño de Algoritmos, Sistemas Operativos, Diseño de Compiladores, Bases de Datos Avanzadas, Redes Computacionales, Administración de Proyectos.",
	},
	Experience: {
		Title: "Experiencia",
		Items: [
			{
				Title: "Desarollador Full-Stack @Blue People",
				Time: "Feb 2022 - Actual",
				Description: [
					"Desarrollar de aplicaciones web y móviles (React/React Native) utilizada por clientes para facilitar la administración interna de servicios.",
					"Trabajar en un equipo multidisciplinario proveyendo de asesoría técnica durante etapas de planeación.",
					"Liderar equipo técnico durante etapas finales de proyectos y proveer tutela a nuevos empleados introducidos al proyecto.",
				],
			},
			{
				Title: "Desarollador Full-Stack @Freelance",
				Time: "Feb 2021 - Jun 2021",
				Description: [
					"Diseñar y desarrollar aplicaciones web (React) sobre demanda para satisfacer necesidades tecnológicas de pequeñas empresas.",
					"Trabajar en tiempos justos y administrar el alcance y requerimientos del proyecto.",
				],
			},
			{
				Title: "Ingeniero de Software Jr. @SES",
				Time: "Ene 2019 - Feb 2022",
				Description: [
					"Diseñar, desarrollar y mantener aplicaciones web (React) usadas para los sistemas de administración internos.",
					"Desarrollar Herramientas de automatización (Python/C++) y análisis (React) de procesos para la gestión de contabilidad.",
				],
			},
		],
	},
	Projects: {
		Title: "Proyectos Destacados",
		Items: [
			{
				Title: "Portfolio Web Page",
				Time: "2022",
				Img: "Portfolio.jpg",
				Description:
					"Página web de presentación personal para concentrar información relevante de experiencias previas laborales y educativas, así como proyectos de interés. Desarrollada con Typescript y React, desplegada en AWS.",
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
					"Compilador personalizado para la ejecución de un lenguaje de programación propio basado en la sintaxis C++ y en la estructura del JVM para Java. Desarrollado en Python con la librería Lex-Yacc.",
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
					"Aplicación para iOS y web diseñada para la feria de arte ZONAMACO, permite a los usuarios obtener información de los expositores, horarios de eventos y piezas de arte dentro de la feria. Desarrollada con Swift (app), Javascript y React (página de administración de contenido) y Firebase (back-end).",
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
						Label: "Github (iOS)",
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
					"Aplicación desarrollada para facilitar el aprendizaje de los conceptos de torque y equilibrio rotacional, incluye ambiente de simulación de masa y gravedad. Desarrollada para iOS con Swift y SpriteKit.",
				Tags: ["Swift", "UIKit", "SpriteKit", "iOS"],
				RepoLinks: [
					{
						Label: "Github",
						Type: "Github",
						Link: "https://github.com/RicarlOz/Fisica-Equilibrio",
					},
					{
						Label: "Github",
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
					"Nueva versión del juego clásico Block Breaker que contiene 3 niveles diferentes, capacidad de guardar/cargar partida y boost personalizados. Desarrollado desde cero con el lenguaje de programación Java.",
				Tags: ["Java", "Video Game"],
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
			language: "Lenguajes",
			framework: "Frameworks",
			cloud: "Proveedores de Cloud",
			other: "Otros",
		},
	},
	Footer: {
		Text: "Hecho por: HeribertoGM - 2023",
	},
};

export default es;
