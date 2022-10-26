interface props {
	language: string;
	[key: string]: any;
}

interface transcript_object {
	[key: string]: any;
}

interface transcript {
	Header: transcript_object;
	Education: transcript_object;
}

interface style {
	[key: string]: { [key: string]: any };
}

export type { props, transcript_object, transcript, style };
