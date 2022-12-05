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

export type {
	header_transcript_object,
	education_transcript_object,
	experience_transcript_object,
	experience_item_object,
};
