/**
 * Represents a configuration-preset.
 */
export enum PresetName
{
    /**
     * Indicates the recommended preset.
     */
    Recommended = "recommended",

    /**
     * Indicates the recommended preset requiring type-checking.
     */
    RecommendedWithTypeChecking = "recommended-requiring-type-checking",

    /**
     * Indicates the weak preset.
     */
    Weak = "weak",

    /**
     * Indicates the weak preset requiring type-checking.
     */
    WeakWithTypeChecking = "weak-requiring-type-checking"
}
