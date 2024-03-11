interface header_transcript_object {
	Title: string;
	Subtitle: string;
	Carousel: string[];
}

interface education_transcript_object {
	Title: string;
	Subtitle: string;
	Date: string;
	GPA: string;
	Courses: string;
}

interface experience_item_object {
	Title: string;
	Time: string;
	Description: string[];
}

interface experience_transcript_object {
	Title: string;
	Items: experience_item_object[];
}

interface projects_item_icon_object {
	Label: string;
	Type: string;
	Link: string;
}

interface projects_item_object {
	Title: string;
	Time: string;
	Img: string;
	Description: string;
	Tags: string[];
	RepoLinks: projects_item_icon_object[];
}

interface projects_transcript_object {
	Title: string;
	Items: projects_item_object[];
}

interface skills_item_object {
	name: string;
	years: number;
	skill: number;
	type: string;
}

interface skills_type_section_titles_object {
	language: string;
	framework: string;
	cloud: string;
	[other: string]: string;
}

interface skills_transcript_object {
	Title: string;
	Skills: skills_item_object[];
	TypeSectionsTitles: skills_type_section_titles_object;
}

interface footer_transcript_object {
	Text: string;
}

export type {
	header_transcript_object,
	education_transcript_object,
	experience_transcript_object,
	experience_item_object,
	projects_transcript_object,
	projects_item_object,
	projects_item_icon_object,
	skills_item_object,
	skills_transcript_object,
	footer_transcript_object,
};
