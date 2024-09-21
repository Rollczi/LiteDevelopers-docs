export interface GitVersionProvider {
    provide(): Promise<string>;
}

export class GitVersionGithubProvider implements GitVersionProvider {
    private owner: string;
    private repository: string;

    constructor(owner: string, repository: string) {
        this.owner = owner;
        this.repository = repository;
    }

    public provide(): Promise<string> {
        return fetch(`https://api.github.com/repos/${this.owner}/${this.repository}/releases/latest`)
            .then(response => response.json())
            .then(data => data.tag_name.replace('v', ''));
    }
}

export class GitVersionReposliteProvider implements GitVersionProvider {
    private reposliteUrl: string;
    private reposliteRepository: string;
    private gav: string;

    constructor(reposliteUrl: string, reposliteRepository: string, gav: string) {
        this.reposliteUrl = reposliteUrl.endsWith('/') ? reposliteUrl.slice(0, -1) : reposliteUrl;
        this.reposliteRepository = reposliteRepository;
        this.gav = gav;
    }

    public provide(): Promise<string> {
        const input = `${this.reposliteUrl}/api/maven/latest/version/${this.reposliteRepository}/${this.gav}`;
        console.log(`Fetching version from: ${input}`);
        return fetch(input)
            .then(response => response.json())
            .then(data => data.version);
    }
}