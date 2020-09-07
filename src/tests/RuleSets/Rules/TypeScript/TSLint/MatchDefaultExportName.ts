import { TempFile, TempFileSystem } from "@manuth/temp-files";
import { writeFile } from "fs-extra";
import { Context } from "mocha";
import { basename } from "upath";
import { RuleSet } from "../../../../Debugging/RuleSet";
import { ScriptKind } from "../../../../Debugging/ScriptKind";
import { LintTestCase } from "../../../../Debugging/Suites/LintTestCase";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite";
import { ITestCase } from "../../../../Debugging/TestCases/ITestCase";

/**
 * Represents a suite for the `match-default-export-name` rule.
 */
class MatchDefaultExportNameSuite extends TSLintRuleSuite
{
    /**
     * The name of the temporary file.
     */
    private tempFileName: string;

    /**
     * A temprary file with a default export;
     */
    private tempFile: TempFile;

    /**
     * The name of the export to test.
     */
    private exportName = "testExport";

    /**
     * Initializes a new instance of the `MatchDefaultExportNameSuite` class.
     */
    public constructor()
    {
        super("match-default-export-name", []);
    }

    /**
     * Gets the name of the temporary file.
     */
    public get TempFileName(): string
    {
        if (!this.tempFileName)
        {
            this.tempFileName = TempFileSystem.TempName(
                {
                    postfix: ".ts"
                });
        }

        return this.tempFileName;
    }

    /**
     * Gets a temporary file with a default export.
     */
    public get TempFile(): TempFile
    {
        return this.tempFile;
    }

    /**
     * Gets the name of the export to test.
     */
    public get ExportName(): string
    {
        return this.exportName;
    }

    /**
     * Gets the code-snippets of this test-suite.
     */
    protected get InternalTestCases(): ITestCase[]
    {
        let self = this;

        return [
            {
                Description: "Checking whether names of default export-members in `import`-statements must match…",
                RuleSet: RuleSet.All,
                ScriptKind: ScriptKind.TS,
                CodeSnippets: [
                    {
                        Valid: false,
                        Snippets: [
                            `import incorrectName from ${JSON.stringify(self.TempFileName.replace(/.ts$/, ""))};`
                        ]
                    }
                ]
            }
        ];
    }

    /**
     * @inheritdoc
     */
    public get TestCases(): LintTestCase[]
    {
        return this.InternalTestCases.map(
            (testCase) =>
            {
                return this.CreateTestCase(testCase);
            });
    }

    /**
     * @inheritdoc
     *
     * @param mocha
     * The mocha-context.
     */
    public async SuiteSetup(mocha: Context): Promise<void>
    {
        this.tempFile = new TempFile(
            {
                name: basename(this.TempFileName),
                discardDescriptor: true
            });

        return writeFile(
            this.TempFile.FullName,
            `
                let ${this.ExportName} = 2;
                export default ${this.ExportName};`);
    }

    /**
     * @inheritdoc
     *
     * @param mocha
     * The mocha-context.
     */
    public async SuiteTeardown(mocha: Context): Promise<void>
    {
        this.TempFile.Dispose();
        this.tempFile = null;
    }
}

export let MatchDefaultExportName = new MatchDefaultExportNameSuite();
