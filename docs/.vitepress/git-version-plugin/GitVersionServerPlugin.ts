import type { Plugin } from "vite";
import { GitVersionService } from "./GitVersionService";
import type { GitVersionProvider } from "./GitVersionProvider";

export interface GitVersionOptions {
    versionProviders: { [key: string]: GitVersionProvider };
}

export function GitVersionServerPlugin(options: GitVersionOptions): Plugin {
    const gitVersionService = new GitVersionService(options);

    return {
        name: '@rollczi/git-version',
        // May set to 'pre' since end user may use vitepress wrapped vite plugin to
        // specify the plugins, which may cause this plugin to be executed after
        // vitepress or the other markdown processing plugins.
        enforce: 'pre',
        transform(code, id): Promise<string | null> | null {
            if (!id.endsWith('.md')) {
                return null
            }

            return gitVersionService.replaceGitVersionPlaceholder(code)
                .then(changedCode => changedCode === code ? null : changedCode);
        },
    }
}
