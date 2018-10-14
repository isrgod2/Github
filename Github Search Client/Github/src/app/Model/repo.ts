export interface owner{
	avatar_url: string
}

export interface repo {
	name: string;
	owner: owner
}

export interface test{
	name: string;
}

export interface github_response{
	items: repo[]
}