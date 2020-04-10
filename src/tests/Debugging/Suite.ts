import { ISuite } from "./ISuite";
import { RuleSet } from "./RuleSet";
import { SuiteContainer } from "./SuiteContainer";
import { TestContext } from "./TestContext";

/**
 * Represents a suite.
 */
export abstract class Suite implements ISuite
{
    /**
     * @inheritdoc
     */
    public Parent: SuiteContainer = null;

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
    public abstract Register(context: TestContext, ruleSet: RuleSet): void;
}
