import type { GitVersionOptions } from "./GitVersionServerPlugin";

export class GitVersionService {

    private latestVersions: Map<string, string> = new Map<string, string>();
    private options: GitVersionOptions;

    constructor(options: GitVersionOptions) {
        this.options = options;
    }

    public async replaceGitVersionPlaceholder(code: string): Promise<string> {
        for (let regExpExecArray of Array.from(code.matchAll(/\{version:(\w+)}/g))) {
            const project = regExpExecArray[1];
            console.log(`Replacing version for project: ${project}`);
            code = code.replace(regExpExecArray[0], `${await this.getLatestVersion(project)}`);
        }

        return code
    }

    public getLatestVersion(project: string): Promise<string> {
        const cachedVersion = this.latestVersions.get(project);

        if (cachedVersion) {
            return Promise.resolve(cachedVersion);
        }

        return this.fetchLatestVersion(project);
    }

    public async fetchLatestVersion(project: string): Promise<string> {
        const provider = this.options.versionProviders[project];

        if (!provider) {
            throw new Error(`No version provider for project: ${project}`);
        }

        let version = await provider.provide();
        this.latestVersions.set(project, version);
        return version;
    }

}