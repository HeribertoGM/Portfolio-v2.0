import {
	header_transcript_object,
	education_transcript_object,
	experience_transcript_object,
	experience_item_object,
	projects_transcript_object,
	projects_item_object,
} from "./transcripts_types";

interface props {
	language: string;
	[key: string]: any;
}

interface experience_item_props {
	id: string;
	elem: experience_item_object;
	last: boolean;
	visible: boolean;
}

interface projects_item_props {
	id: number;
	elem: projects_item_object;
}

interface transcript {
	Header: header_transcript_object;
	Education: education_transcript_object;
	Experience: experience_transcript_object;
	Projects: projects_transcript_object;
}

interface style {
	[key: string]: { [key: string]: any };
}

export type {
	props,
	experience_item_props,
	projects_item_props,
	transcript,
	style,
};
