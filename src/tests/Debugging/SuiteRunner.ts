import { TestConstants } from "../TestConstants";
import { ISuite } from "./ISuite";
import { TestContext } from "./TestContext";

/**
 * Provides the functionality to execute test-suites.
 */
export class SuiteRunner
{
    /**
     * The suites to run.
     */
    private suites: ISuite[] = [];

    /**
     * Initializes a new instance of the `SuiteRunner` class.
     *
     * @param suites
     * The suites to run.
     */
    public constructor(suites: ISuite[])
    {
        this.Suites.push(...suites);
    }

    /**
     * Gets the suites to run.
     */
    public get Suites(): ISuite[]
    {
        return this.suites;
    }

    /**
     * Registers the `mocha`-tests.
     *
     * @param context
     * The test-context.
     */
    public Register(context: TestContext): void
    {
        for (let ruleSet of TestConstants.RuleSets)
        {
            suite(
                TestConstants.RuleSetNames[ruleSet],
                () =>
                {
                    for (let suite of this.Suites)
                    {
                        suite.Register(context, ruleSet);
                    }
                });
        }
    }
}
