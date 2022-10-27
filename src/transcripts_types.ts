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

export type { header_transcript_object, education_transcript_object };
