import { TempFileSystem } from "@manuth/temp-files";
import fs from "fs-extra";
import { Context } from "mocha";
import { TSLintRule } from "../../../../../TSLintRule.cjs";
import { RuleSet } from "../../../../Debugging/RuleSet.js";
import { ScriptKind } from "../../../../Debugging/ScriptKind.js";
import { LintTestCase } from "../../../../Debugging/Suites/LintTestCase.js";
import { TSLintRuleSuite } from "../../../../Debugging/Suites/TSLintRuleSuite.js";
import { ITestCase } from "../../../../Debugging/TestCases/ITestCase.js";
import { TestContext } from "../../../../Debugging/TestContext.js";

const { remove, writeFile } = fs;

/**
 * Represents a suite for the {@link TSLintRule.MatchDefaultExportName `MatchDefaultExportName`} rule.
 */
class MatchDefaultExportNameSuite extends TSLintRuleSuite
{
    /**
     * The name of the generic file.
     */
    private genericFileName: string;

    /**
     * The name of the commonjs file.
     */
    private commonJSFileName: string;

    /**
     * The name of the es-module file.
     */
    private esModuleFileName: string;

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
     * Gets the name of the generic file.
     */
    public get GenericFileName(): string
    {
        if (!this.genericFileName)
        {
            this.genericFileName = TempFileSystem.TempBaseName(
                {
                    Prefix: "generic-",
                    Suffix: ".ts"
                });
        }

        return this.genericFileName;
    }

    /**
     * Gets the name of the commonjs file.
     */
    public get CommonJSFileName(): string
    {
        if (!this.commonJSFileName)
        {
            this.commonJSFileName = TempFileSystem.TempBaseName(
                {
                    Prefix: "commonjs-",
                    Suffix: ".cts"
                });
        }

        return this.commonJSFileName;
    }

    /**
     * Gets the name of the es-module file.
     */
    public get ESModuleFileName(): string
    {
        if (!this.esModuleFileName)
        {
            this.esModuleFileName = TempFileSystem.TempBaseName(
                {
                    Prefix: "es-module-",
                    Suffix: ".mts"
                });
        }

        return this.esModuleFileName;
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
                Description: "Checking whether names of default export-members in `import`-statements must match in CommonJS files…",
                RuleSet: RuleSet.All,
                ScriptKind: ScriptKind.GenericTS | ScriptKind.CTS,
                CodeSnippets: [
                    {
                        Valid: false,
                        Snippets: [
                            `import incorrectName from ${JSON.stringify("./" + self.GenericFileName.replace(/\.ts$/, ""))};`,
                            `import incorrectName from ${JSON.stringify("./" + self.CommonJSFileName.replace(/(\.c)ts$/, "$1js"))};`
                        ]
                    },
                    {
                        Valid: true,
                        Snippets: [
                            `import ${self.ExportName} from ${JSON.stringify("./" + self.GenericFileName.replace(/\.ts$/, ""))};`,
                            `import ${self.ExportName} from ${JSON.stringify("./" + self.CommonJSFileName.replace(/(\.c)ts$/, "$1js"))};`
                        ]
                    }
                ]
            },
            {
                Description: "Checking whether names of default export-members in `import`-statements must match in ESModule files…",
                RuleSet: RuleSet.All,
                ScriptKind: ScriptKind.MTS,
                CodeSnippets: [
                    {
                        Valid: false,
                        Snippets: [
                            `import incorrectName from ${JSON.stringify("./" + self.ESModuleFileName.replace(/(\.m)ts$/, "$1js"))};`
                        ]
                    },
                    {
                        Valid: true,
                        Snippets: [
                            `import ${self.ExportName} from ${JSON.stringify("./" + self.ESModuleFileName.replace(/(\.m)ts$/, "$1js"))}`
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
     *
     * @param testContext
     * The test-context.
     */
    public override async TestSetup(mocha: Context, testContext: TestContext): Promise<void>
    {
        await Promise.all(
            [
                this.GenericFileName,
                this.CommonJSFileName,
                this.esModuleFileName
            ].map((file) => writeFile(
                testContext.Workspace.MakeSourcePath(file),
                `
                    let ${this.ExportName} = 2;
                    export default ${this.ExportName};`)));
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
    public override async TestTeardown(mocha: Context, testContext: TestContext): Promise<void>
    {
        await Promise.all(
            [
                this.GenericFileName,
                this.CommonJSFileName,
                this.ESModuleFileName
            ].map((file) => remove(testContext.Workspace.MakePath(file))));
    }
}

/**
 * Represents a suite for the {@link TSLintRule.MatchDefaultExportName `MatchDefaultExportName`} rule.
 */
export let MatchDefaultExportName = new MatchDefaultExportNameSuite();
