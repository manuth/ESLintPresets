import { ISuite } from "./ISuite";

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
}
