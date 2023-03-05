import { RuleSet } from "./Debugging/RuleSet.js";
import { ScriptKind } from "./Debugging/ScriptKind.js";
import Recommended from "../Configuration/Recommended.cjs";
import RecommendedWithTypeChecking from "../Configuration/RecommendedWithTypeChecking.cjs";
import Weak from "../Configuration/Weak.cjs";
import WeakWithTypeChecking from "../Configuration/WeakWithTypeChecking.cjs";

/**
 * Provides constants for the tests.
 */
export class TestConstants
{
    /**
     * Provides file-names for the different script-kinds.
     */
    public static FileNames: Record<ScriptKind, string> = {
        [ScriptKind.GenericJS]: "javascript.js",
        [ScriptKind.CJS]: "commonjs.cjs",
        [ScriptKind.MJS]: "es-module.mjs",
        [ScriptKind.GenericTS]: "typescript.ts",
        [ScriptKind.CTS]: "common-ts.cts",
        [ScriptKind.MTS]: "es-module-ts.mts",
        [ScriptKind.GenericDTS]: "types.d.ts",
        [ScriptKind.CDTS]: "commonjs-types.d.cts",
        [ScriptKind.MDTS]: "es-module-types.d.mts"
    };

    /**
     * Provides the names of the different script kinds.
     */
    public static ScriptKindNames: Record<ScriptKind, string> = {
        [ScriptKind.GenericJS]: "JavaScript",
        [ScriptKind.CJS]: "JavaScript CommonJS",
        [ScriptKind.MJS]: "JavaScript ESModule",
        [ScriptKind.GenericTS]: "TypeScript",
        [ScriptKind.CTS]: "TypeScript CommonJS",
        [ScriptKind.MTS]: "TypeScript ESModule",
        [ScriptKind.GenericDTS]: "TypeScript Declaration",
        [ScriptKind.CDTS]: "TypeScript CommonJS Declaration",
        [ScriptKind.MDTS]: "TypeScript ESModule Declaration"
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
        ScriptKind.GenericJS,
        ScriptKind.CJS,
        ScriptKind.MJS,
        ScriptKind.GenericTS,
        ScriptKind.CTS,
        ScriptKind.MTS,
        ScriptKind.GenericDTS,
        ScriptKind.CDTS,
        ScriptKind.MDTS
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
