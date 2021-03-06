import { IRegisterable } from "../IRegisterable";

/**
 * Represents a suite.
 */
export interface ISuite extends IRegisterable
{
    /**
     * Gets the name of the test-suite.
     */
    SuiteName: string;
}
