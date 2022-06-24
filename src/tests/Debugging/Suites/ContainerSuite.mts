import { IRegisterable } from "../IRegisterable.mjs";
import { RegisterableContainer } from "../RegisterableContainer.mjs";
import { RuleSet } from "../RuleSet.mjs";
import { TestContext } from "../TestContext.mjs";
import { Suite } from "./Suite.mjs";

/**
 * Represents a suite which contains other suites.
 */
export class ContainerSuite extends Suite
{
    /**
     * The name of the suite.
     */
    private suiteName: string;

    /**
     * The children of the suite.
     */
    private container: RegisterableContainer;

    /**
     * Initializes a new instance of the {@link ContainerSuite `ContainerSuite`} class.
     *
     * @param suiteName
     * The name of the suite.
     *
     * @param children
     * The children of the suite.
     */
    public constructor(suiteName: string, children: IRegisterable[])
    {
        super();
        this.suiteName = suiteName;
        this.container = new RegisterableContainer(children);
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return this.suiteName;
    }

    /**
     * Gets the container which contains the suites.
     */
    protected get Container(): RegisterableContainer
    {
        return this.container;
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
        this.Container.Register(context, ruleSet);
    }
}
