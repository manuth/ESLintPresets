import { Package } from "@manuth/package-json-editor";
import { TempFileSystem } from "@manuth/temp-files";
import { ensureFile, readFile, remove, writeFile, writeJSON } from "fs-extra";
import { Context } from "mocha";
import { RuleSuite } from "../../../Debugging/Suites/RuleSuite";
import { ITestCase } from "../../../Debugging/TestCases/ITestCase";
import { TestContext } from "../../../Debugging/TestContext";

/**
 * Provides the functionality to test rules related to the visibility of imports.
 */
export class ImportVisibilitySuite extends RuleSuite
{
    /**
     * The name of the ignored file.
     */
    private static ignoredFileName: string = null;

    /**
     * The backup of the `package.json`-file.
     */
    private packageBackup: Buffer;

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
        super.SuiteSetup(mocha, testContext);
        let npmPackage = new Package(testContext.Workspace.PackageManifestFileName);
        this.packageBackup = await readFile(testContext.Workspace.PackageManifestFileName);
        npmPackage.Dependencies.Add(ImportVisibilitySuite.PublicDependency, "*");
        npmPackage.DevelpomentDependencies.Add(ImportVisibilitySuite.DevelopmentDependency, "*");
        await writeJSON(testContext.Workspace.PackageManifestFileName, npmPackage.ToJSON());
        await writeFile(testContext.Workspace.MakePath(this.npmIgnoreFileName), ImportVisibilitySuite.IgnoredFileName);
        await ensureFile(testContext.Workspace.MakeSourcePath(ImportVisibilitySuite.IgnoredFileName));
        await writeFile(testContext.Workspace.MakeSourcePath(ImportVisibilitySuite.IgnoredFileName), "export = {};");
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
    public override async SuiteTeardown(mocha: Context, testContext: TestContext): Promise<void>
    {
        await writeFile(testContext.Workspace.PackageManifestFileName, this.packageBackup);
        await remove(testContext.Workspace.MakePath(this.npmIgnoreFileName));
        await remove(testContext.Workspace.MakeSourcePath(ImportVisibilitySuite.IgnoredFileName));
    }
}
