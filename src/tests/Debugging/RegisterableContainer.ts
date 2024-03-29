import { IRegisterable } from "./IRegisterable.js";
import { RuleSet } from "./RuleSet.js";
import { TestContext } from "./TestContext.js";

/**
 * Provides a component which container registerable components.
 */
export class RegisterableContainer implements IRegisterable
{
    /**
     * The children of the container.
     */
    private children: IRegisterable[] = [];

    /**
     * Initializes a new instance of the {@link RegisterableContainer `RegisterableContainer`} class.
     *
     * @param children
     * The children of the container.
     */
    public constructor(children: IRegisterable[])
    {
        this.children.push(...children);
    }

    /**
     * Gets the children of the container.
     */
    public get Children(): readonly IRegisterable[]
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
    public Register(context: TestContext, ruleSet: RuleSet): void
    {
        for (let child of this.Children)
        {
            child.Register(context, ruleSet);
        }
    }
}
