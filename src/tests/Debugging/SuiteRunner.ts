import { TestConstants } from "../TestConstants";
import { IRegisterable } from "./IRegisterable";
import { ISuite } from "./ISuite";
import { RuleSet } from "./RuleSet";
import { TestContext } from "./TestContext";

/**
 * Provides the functionality to execute test-suites.
 */
export class SuiteRunner implements IRegisterable
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
     * @inheritdoc
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to add tests for.
     */
    public Register(context: TestContext, ruleSet: RuleSet): void
    {
        for (let set of TestConstants.RuleSets)
        {
            if ((ruleSet & set) > 0)
            {
                suite(
                    TestConstants.RuleSetNames[set],
                    () =>
                    {
                        for (let suite of this.Suites)
                        {
                            suite.Register(context, set);
                        }
                    });
            }
        }
    }
}
