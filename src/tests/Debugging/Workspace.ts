import { ensureFileSync, writeJSON } from "fs-extra";
import { TempDirectory } from "temp-filesystem";
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
