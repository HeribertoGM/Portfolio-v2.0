interface props {
	language: string;
	[key: string]: any;
}

interface transcript_object {
	[key: string]: any;
}

interface transcript {
	header: string;
	Header: transcript_object;
}

interface style {
	[key: string]: { [key: string]: any };
}

export type { props, transcript_object, transcript, style };
