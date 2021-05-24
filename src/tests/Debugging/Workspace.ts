import { TempDirectory } from "@manuth/temp-files";
import { ensureFileSync, writeJSON } from "fs-extra";
import { TestConstants } from "../TestConstants";
import { ScriptKind } from "./ScriptKind";

/**
 * Represents a workspace.
 */
export class Workspace
{
    /**
     * The directory of the workspace.
     */
    private tempDir: TempDirectory;

    /**
     * The directory which contains source-files.
     */
    private sourceDirectory = "src";

    /**
     * Initializes a new instance of the `Workspace` class.
     */
    public constructor()
    {
        this.tempDir = new TempDirectory();
    }

    /**
     * Initializes the workspace.
     */
    public async Initialize(): Promise<void>
    {
        // ToDo: Remove this workaround once
        // [benmosher/eslint-plugin-import#2096](https://github.com/benmosher/eslint-plugin-import/issues/2096) is fixed
        await writeJSON(this.PackageManifestFileName, {});

        await writeJSON(
            this.TSConfigFileName,
            {
                compilerOptions: {
                    rootDir: this.sourceDirectory,
                    module: "commonjs",
                    allowJs: true,
                    lib: [
                        "es7"
                    ]
                }
            });
    }

    /**
     * Gets the directory of the workspace.
     */
    public get TempDir(): TempDirectory
    {
        return this.tempDir;
    }

    /**
     * Gets the path to the `package.json`-file.
     */
    public get PackageManifestFileName(): string
    {
        return this.TempDir.MakePath("package.json");
    }

    /**
     * Gets the path to the `tsconfig.json`-file.
     */
    public get TSConfigFileName(): string
    {
        return this.TempDir.MakePath("tsconfig.json");
    }

    /**
     * Gets the filename for the specified `scriptKind`.
     *
     * @param scriptKind
     * The script-kind to get the filename for.
     *
     * @returns
     * The filename for the specified `scriptKind`.
     */
    public GetFileName(scriptKind: ScriptKind): string
    {
        let result = this.TempDir.MakePath(this.sourceDirectory, TestConstants.FileNames[scriptKind]);
        ensureFileSync(result);
        return result;
    }

    /**
     * Disposes the workspace.
     */
    public Dispose(): void
    {
        this.TempDir.Dispose();
    }
}
