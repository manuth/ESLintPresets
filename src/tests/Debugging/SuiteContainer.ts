import { ISuite } from "./ISuite";
import { TestContext } from "./TestContext";

/**
 * Represents a suite which contains other suites.
 */
export class SuiteContainer implements ISuite
{
    /**
     * @inheritdoc
     */
    public Parent: SuiteContainer;

    /**
     * The name of the suite.
     */
    private suiteName: string;

    /**
     * The children of the suite.
     */
    private children: ISuite[];

    /**
     * Initializes a new instance of the `SuiteContainer` class.
     *
     * @param suiteName
     * The name of the suite.
     */
    public constructor(suiteName: string)
    {
        this.suiteName = suiteName;
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
    public get Children(): ISuite[]
    {
        return this.children;
    }

    /**
     * @inheritdoc
     *
     * @param context
     * The test-context.
     */
    public Register(context: TestContext): void
    {
        for (let child of this.Children)
        {
            child.Register(context);
        }
    }
}
