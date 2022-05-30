import { TempFileSystem } from "@manuth/temp-files";
import fs from "fs-extra";
import { Context } from "mocha";
import { TSLintRule } from "../../../../../TSLintRule.js";
import { RuleSet } from "../../../../Debugging/RuleSet.mjs";
import { ScriptKind } from "../../../../Debugging/ScriptKind.mjs";
import { LintTestCase } from "../../../../Debugging/Suites/LintTestCase.mjs";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite.mjs";
import { ITestCase } from "../../../../Debugging/TestCases/ITestCase.mjs";

const { remove, writeFile } = fs;

/**
 * Represents a suite for the {@link TSLintRule.MatchDefaultExportName `MatchDefaultExportName`} rule.
 */
class MatchDefaultExportNameSuite extends TSLintRuleSuite
{
    /**
     * The name of the temporary file.
     */
    private tempFileName: string;

    /**
     * The name of the export to test.
     */
    private exportName = "testExport";

    /**
     * Initializes a new instance of the {@link MatchDefaultExportNameSuite `MatchDefaultExportNameSuite`} class.
     */
    public constructor()
    {
        super(TSLintRule.MatchDefaultExportName, []);
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
                    Suffix: ".ts"
                });
        }

        return this.tempFileName;
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
    public override get TestCases(): LintTestCase[]
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
    public override async SuiteSetup(mocha: Context): Promise<void>
    {
        return writeFile(
            this.TempFileName,
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
    public override async SuiteTeardown(mocha: Context): Promise<void>
    {
        return remove(this.TempFileName);
    }
}

/**
 * Represents a suite for the {@link TSLintRule.MatchDefaultExportName `MatchDefaultExportName`} rule.
 */
export let MatchDefaultExportName = new MatchDefaultExportNameSuite();
