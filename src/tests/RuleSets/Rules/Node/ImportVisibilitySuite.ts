import { Package } from "@manuth/package-json-editor";
import { TempFileSystem } from "@manuth/temp-files";
import fs from "fs-extra";
import { Context } from "mocha";
import { IndependentRuleSuite } from "../../../Debugging/IndependentRuleSuite.js";
import { ITestCase } from "../../../Debugging/TestCases/ITestCase.js";
import { TestContext } from "../../../Debugging/TestContext.js";

const { ensureFile, writeFile, writeJSON } = fs;

/**
 * Provides the functionality to test rules related to the visibility of imports.
 */
export class ImportVisibilitySuite extends IndependentRuleSuite
{
    /**
     * The name of the ignored file.
     */
    private static ignoredFileName: string | null = null;

    /**
     * The name of the `.npmignore`-file.
     */
    private npmIgnoreFileName = ".npmignore";

    /**
     * Initializes a new instance of the {@link ImportVisibilitySuite `ImportVisibilitySuite`} class.
     *
     * @param ruleName
     * The name of the rule to test.
     *
     * @param testCases
     * The test-cases of the test-suite.
     */
    public constructor(ruleName: string, testCases: ITestCase[])
    {
        super(ruleName, testCases);
    }

    /**
     * Gets the name of the public dependency.
     */
    public static get PublicDependency(): string
    {
        return "chalk";
    }

    /**
     * Gets the name of the development dependency.
     */
    public static get DevelopmentDependency(): string
    {
        return "gulp";
    }

    /**
     * Gets the name of the ignored file.
     */
    public static get IgnoredFileName(): string
    {
        if (this.ignoredFileName === null)
        {
            this.ignoredFileName = TempFileSystem.TempBaseName();
        }

        return this.ignoredFileName;
    }

    /**
     * @inheritdoc
     *
     * @param mocha
     * The mocha-context.
     *
     * @param testContext
     * The test-context.
     */
    public override async SuiteSetup(mocha: Context, testContext: TestContext): Promise<void>
    {
        await super.SuiteSetup(mocha, testContext);
        let npmPackage = new Package(testContext.Workspace.PackageManifestFileName);
        npmPackage.Dependencies.Add(ImportVisibilitySuite.PublicDependency, "*");
        npmPackage.DevelopmentDependencies.Add(ImportVisibilitySuite.DevelopmentDependency, "*");
        await writeJSON(testContext.Workspace.PackageManifestFileName, npmPackage.ToJSON());
        await writeFile(testContext.Workspace.MakePath(this.npmIgnoreFileName), ImportVisibilitySuite.IgnoredFileName);
        await ensureFile(testContext.Workspace.MakeSourcePath(ImportVisibilitySuite.IgnoredFileName));
        await writeFile(testContext.Workspace.MakeSourcePath(ImportVisibilitySuite.IgnoredFileName), "export = {};");
    }
}
