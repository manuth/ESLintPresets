import { spawnSync } from "child_process";
import { Context } from "mocha";
import npmWhich = require("npm-which");
import { IndependentRuleSuite } from "../../../Debugging/IndependentRuleSuite";
import { ITestCase } from "../../../Debugging/TestCases/ITestCase";
import { TestContext } from "../../../Debugging/TestContext";

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
            npmWhich(__dirname).sync("npm"),
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
