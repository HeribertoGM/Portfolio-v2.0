import {
	header_transcript_object,
	education_transcript_object,
} from "./transcripts_types";

interface props {
	language: string;
	[key: string]: any;
}

interface transcript {
	Header: header_transcript_object;
	Education: education_transcript_object;
}

interface style {
	[key: string]: { [key: string]: any };
}

export type { props, transcript, style };
