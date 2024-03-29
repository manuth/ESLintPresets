import { IRegisterable } from "./IRegisterable.js";
import { RuleSet } from "./RuleSet.js";
import { TestContext } from "./TestContext.js";
import { TestConstants } from "../TestConstants.js";

/**
 * Represents a container which registers its children by their rule-set.
 */
export class RuleSetContainer implements IRegisterable
{
    /**
     * The component to register.
     */
    private registerable: IRegisterable;

    /**
     * Initializes a new instance of the {@link RuleSetContainer `RuleSetContainer`} class.
     *
     * @param registerable
     * The component to register.
     */
    public constructor(registerable: IRegisterable)
    {
        this.registerable = registerable;
    }

    /**
     * Gets the component to register.
     */
    public get Registerable(): IRegisterable
    {
        return this.registerable;
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
                        this.Registerable.Register(context, set);
                    });
            }
        }
    }
}
