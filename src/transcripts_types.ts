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

export type {
	header_transcript_object,
	education_transcript_object,
	experience_transcript_object,
	experience_item_object,
	projects_transcript_object,
	projects_item_object,
	projects_item_icon_object,
};
