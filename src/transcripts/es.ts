import { transcript } from "../types";

const es: transcript = {
	Header: {
		Title: "Hola, soy Heriberto",
		Subtitle: "y me gusta programar en ",
		Carousel: [
			"Python.",
			"Java.",
			"C++.",
			"C.",
			"C#.",
			"HTML.",
			"CSS.",
			"JavaScript.",
			"Ruby.",
		],
	},
	Education: {
		Title: "Educación",
		Subtitle:
			"Tec de Monterrey - Ingeniería en Tecnologías Computacionales",
		Date: "Previsto Agosto 2023",
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
};

export default es;
