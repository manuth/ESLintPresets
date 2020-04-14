import { RuleSet } from "../RuleSet";
import { TestContext } from "../TestContext";
import { ISuite } from "./ISuite";

/**
 * Represents a suite.
 */
export abstract class Suite implements ISuite
{
    /**
     * Initializes a new instance of the `Suite` class.
     */
    public constructor()
    { }

    /**
     * @inheritdoc
     */
    public abstract get SuiteName(): string;

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
        suite(
            this.SuiteName,
            () =>
            {
                this.RegisterInternal(context, ruleSet);
            });
    }

    /**
     * Registers the `mocha`-tests.
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to add tests for.
     */
    protected abstract RegisterInternal(context: TestContext, ruleSet: RuleSet): void;
}