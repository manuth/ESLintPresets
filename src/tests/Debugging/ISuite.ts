/**
 * Represents a suite.
 */
export interface ISuite
{
    /**
     * Gets the name of the test-suite.
     */
    SuiteName: string;

    /**
     * Gets or sets the parent of the suite.
     */
    Parent: ISuite;
}
