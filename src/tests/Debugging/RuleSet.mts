/**
 * Represents a rule-set.
 */
export enum RuleSet
{

    /**
     * Indicates the recommended rule-set.
     */
    Recommended = 1 << 0,

    /**
     * Indicates the weak rule-set.
     */
    Weak = 1 << 1,

    /**
     * Indicates all rule-sets.
     */
    All = Recommended | Weak
}
