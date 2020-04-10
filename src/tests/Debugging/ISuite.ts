import { SuiteContainer } from "./SuiteContainer";

/**
 * Represents a suite.
 */
export interface ISuite
{
    /**
     * Gets or sets the parent of the suite.
     */
    Parent: SuiteContainer;

    /**
     * Gets the name of the test-suite.
     */
    SuiteName: string;
}
