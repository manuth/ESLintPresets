import { SuiteContainer } from "./SuiteContainer";
import { TestContext } from "./TestContext";

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

    /**
     * Registers the `mocha`-tests.
     *
     * @param context
     * The test-context.
     */
    Register(context: TestContext): void;
}
