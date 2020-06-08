import Recommended = require("../Configuration/Recommended");
import RecommendedWithTypeChecking = require("../Configuration/RecommendedWithTypeChecking");
import Weak = require("../Configuration/Weak");
import WeakWithTypeChecking = require("../Configuration/WeakWithTypeChecking");
import { RuleSet } from "./Debugging/RuleSet";
import { ScriptKind } from "./Debugging/ScriptKind";

/**
 * Provides constants for the tests.
 */
export class TestConstants
{
    /**
     * Provides file-names for the different script-kinds.
     */
    public static FileNames: Record<ScriptKind, string> = {
        [ScriptKind.JS]: "javascript.js",
        [ScriptKind.TS]: "typescript.ts",
        [ScriptKind.DTS]: "types.d.ts"
    };

    /**
     * Provides the rule-sets to execute.
     */
    public static RuleSets: RuleSet[] = [
        RuleSet.Recommended,
        RuleSet.Weak
    ];

    /**
     * Provides the script-kinds to execute.
     */
    public static ScriptKinds: ScriptKind[] = [
        ScriptKind.JS,
        ScriptKind.TS,
        ScriptKind.DTS
    ];

    /**
     * Provides names for the different rule-sets.
     */
    public static RuleSetNames: Record<RuleSet, string> = {
        [RuleSet.Recommended]: RuleSet[RuleSet.Recommended],
        [RuleSet.Weak]: RuleSet[RuleSet.Weak]
    };

    /**
     * Provides configurations for the different rule-sets.
     */
    public static RuleSetConfigurations: Record<RuleSet, any> = {
        [RuleSet.Recommended]: Recommended,
        [RuleSet.Weak]: Weak
    };

    /**
     * Provides configurations for the different rule-sets with type-checking.
     */
    public static RuleSetConfigurationsWithTypeChecking: Record<RuleSet, any> = {
        [RuleSet.Recommended]: RecommendedWithTypeChecking,
        [RuleSet.Weak]: WeakWithTypeChecking
    };
}
