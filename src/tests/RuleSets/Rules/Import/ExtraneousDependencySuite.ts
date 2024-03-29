import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { Context } from "mocha";
import npmWhich from "npm-which";
import { IndependentRuleSuite } from "../../../Debugging/IndependentRuleSuite.js";
import { ITestCase } from "../../../Debugging/TestCases/ITestCase.js";
import { TestContext } from "../../../Debugging/TestContext.js";

/**
 * Provides a rule-suite environment with an extraneous dependency.
 */
export class ExtraneousDependencySuite extends IndependentRuleSuite
{
    /**
     * Initializes a new instance of the {@link ExtraneousDependencySuite `ExtraneousDependencySuite`} class.
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
     * Gets the name of the extraneous dependency.
     */
    public static get ExtraneousDependency(): string
    {
        return "escape-string-regexp";
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
        mocha.timeout(20 * 1000);
        await super.SuiteSetup(mocha, testContext);

        spawnSync(
            npmWhich(fileURLToPath(new URL(".", import.meta.url))).sync("npm"),
            [
                "install",
                "--no-save",
                ExtraneousDependencySuite.ExtraneousDependency
            ],
            {
                cwd: testContext.Workspace.MakePath()
            });
    }
}
