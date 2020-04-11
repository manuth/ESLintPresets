import { ISuite } from "./ISuite";
import { RuleSet } from "./RuleSet";
import { Suite } from "./Suite";
import { TestContext } from "./TestContext";

/**
 * Represents a suite which contains other suites.
 */
export class SuiteContainer extends Suite
{
    /**
     * The name of the suite.
     */
    private suiteName: string;

    /**
     * The children of the suite.
     */
    private children: ISuite[] = [];

    /**
     * Initializes a new instance of the `SuiteContainer` class.
     *
     * @param suiteName
     * The name of the suite.
     *
     * @param children
     * The children of the suite.
     */
    public constructor(suiteName: string, children: ISuite[])
    {
        super();
        this.suiteName = suiteName;

        for (let child of children)
        {
            this.children.push(child);
        }
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return this.suiteName;
    }

    /**
     * Gets the children of the suite.
     */
    public get Children(): readonly ISuite[]
    {
        return this.children;
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
    protected RegisterInternal(context: TestContext, ruleSet: RuleSet): void
    {
        for (let child of this.Children)
        {
            child.Register(context, ruleSet);
        }
    }
}
