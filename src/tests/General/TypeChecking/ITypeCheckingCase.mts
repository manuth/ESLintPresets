// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TypeCheckingCase } from "./TypeCheckingCase.mjs";

/**
 * Provides data for {@link TypeCheckingCase `TypeCheckingCase`}s.
 */
export interface ITypeCheckingCase
{
    /**
     * A value indicating whether type-checking rules should be loaded.
     */
    UseTypeCheckingRules: boolean;

    /**
     * A value indicating whether type-checking should be enabled.
     */
    EnableTypeChecking: boolean;
}
