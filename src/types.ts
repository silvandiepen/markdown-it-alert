export interface IMDAlertsOptions {
	links: boolean;
	bem?: boolean;
	tag?: string;
	role?: boolean;
	types?: string[];
}
export interface IMDContainerOptions {
	marker?: string;
	validate?: any;
	render?: any;
}

export interface IMDContainerToken {
	markup: string;
	block: boolean;
	info: string;
	map: number[];
}
export interface IMDContainerSettings {
	startLine: number;
	endLine: number;
	silent: boolean;
	pos?: number;
	nextLine?: number;
	marker_count?: number;
	markup?: string;
	params?: string;
	token?: IMDContainerToken;
	old_parent?: string;
	old_line_max?: number;
	auto_closed: boolean;
	start: number;
	max: number;
}
