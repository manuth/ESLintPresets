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
     * Converts flags to an array.
     *
     * @param declaration
     * The declaration of the enum.
     *
     * @param value
     * The value to convert.
     *
     * @returns
     * An array which contains all enum-values of the flags.
     */
    protected static FlagsToArray<TEnum extends number>(declaration: { [key: number]: string }, value: TEnum): TEnum[]
    {
        let result: TEnum[] = [];

        for (let key of Object.keys(declaration))
        {
            if (typeof key === "number")
            {
                if ((value & key) > 0)
                {
                    result.push(key);
                }
            }
        }

        return result;
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
