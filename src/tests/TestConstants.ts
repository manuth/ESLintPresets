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
        [ScriptKind.TS]: "typescript.ts"
    };
}
