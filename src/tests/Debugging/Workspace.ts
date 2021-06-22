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
     * Initializes a new instance of the {@link Workspace `Workspace`} class.
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
     * Joins the arguments together and returns the path contained by the workspace.
     *
     * @param path
     * The path that is to be joined.
     *
     * @returns
     * The joined path relative to the workspace.
     */
    public MakePath(...path: string[]): string
    {
        return this.TempDir.MakePath(...path);
    }

    /**
     * Joins the arguments together and returns the path contained by the source-directory.
     *
     * @param path
     * The path that is to be joined.
     *
     * @returns
     * The joined path relative to the source-directory.
     */
    public MakeSourcePath(...path: string[]): string
    {
        return this.MakePath(this.sourceDirectory, ...path);
    }

    /**
     * Gets the filename for the specified {@link scriptKind `scriptKind`}.
     *
     * @param scriptKind
     * The script-kind to get the filename for.
     *
     * @returns
     * The filename for the specified {@link scriptKind `scriptKind`}.
     */
    public GetFileName(scriptKind: ScriptKind): string
    {
        let result = this.MakeSourcePath(TestConstants.FileNames[scriptKind]);
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
