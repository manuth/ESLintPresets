import { Package } from "@manuth/package-json-editor";
import { TempDirectory } from "@manuth/temp-files";
import { ESLint, Linter } from "eslint";
import { ensureFileSync, writeJSON } from "fs-extra";
import merge = require("lodash.merge");
import { fileName, TSConfigJSON } from "types-tsconfig";
import { TestConstants } from "../TestConstants";
import { RuleSet } from "./RuleSet";
import { ScriptKind } from "./ScriptKind";

/**
 * Represents a workspace.
 */
export class Workspace
{
    /**
     * The linters for the specific rule-sets.
     */
    private linters: Map<RuleSet, Map<boolean, ESLint>> = new Map();

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
                    module: "CommonJS",
                    allowJs: true,
                    lib: [
                        "ES2020"
                    ]
                }
            } as TSConfigJSON);
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
        return this.TempDir.MakePath(Package.FileName);
    }

    /**
     * Gets the path to the `tsconfig.json`-file.
     */
    public get TSConfigFileName(): string
    {
        return this.TempDir.MakePath(fileName);
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
     * Gets the linter for the specified {@link ruleSet `ruleSet`}.
     *
     * @param ruleSet
     * The rule-set to get the linter for.
     *
     * @param typeChecking
     * A value indicating whether type-checking should be enabled.
     *
     * @returns
     * The linter for the specified {@link ruleSet `ruleSet`}.
     */
    public GetLinter(ruleSet: RuleSet, typeChecking: boolean): ESLint
    {
        if (!this.linters.has(ruleSet))
        {
            this.linters.set(ruleSet, new Map());
        }

        if (!this.linters.get(ruleSet).has(typeChecking))
        {
            let configuration = this.GetConfiguration(ruleSet, typeChecking, typeChecking);

            this.linters.get(ruleSet).set(
                typeChecking,
                new ESLint(
                    {
                        ...configuration,
                        baseConfig: {
                            ...configuration.baseConfig,
                            env: {
                                node: true,
                                es6: true
                            }
                        }
                    }));
        }

        return this.linters.get(ruleSet).get(typeChecking);
    }

    /**
     * Gets a specific configuration.
     *
     * @param ruleSet
     * The rule-set to get the configuration for.
     *
     * @param useTypeCheckingRules
     * A value indicating whether type-checking rules should be loaded.
     *
     * @param enableTypeChecking
     * A value indicating whether the type-checking should be enabled.
     *
     * @returns
     * The configuration for the specified {@link ruleSet `ruleSet`}.
     */
    public GetConfiguration(ruleSet: RuleSet, useTypeCheckingRules: boolean, enableTypeChecking: boolean): ESLint.Options
    {
        return {
            useEslintrc: false,
            baseConfig: merge<Linter.Config<Linter.RulesRecord>, Linter.Config<Linter.RulesRecord>>(
                enableTypeChecking ?
                    {
                        parserOptions: {
                            project: this.TSConfigFileName
                        }
                    } :
                    {},
                (useTypeCheckingRules ?
                    TestConstants.RuleSetConfigurationsWithTypeChecking :
                    TestConstants.RuleSetConfigurations)[ruleSet])
        };
    }

    /**
     * Disposes the workspace.
     */
    public Dispose(): void
    {
        this.TempDir.Dispose();
    }
}
