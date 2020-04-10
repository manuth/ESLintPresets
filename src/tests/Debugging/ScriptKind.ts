/**
 * Represents a kind of a script.
 */
export enum ScriptKind
{
    /**
     * Indicates javascript.
     */
    JS = 1 << 0,

    /**
     * Indicates a typescript.
     */
    TS = 1 << 1
}
