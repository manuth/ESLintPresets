/**
 * Represents a kind of a script.
 */
export enum ScriptKind
{
    /**
     * Indicates generic javascript.
     */
    GenericJS = 1 << 0,

    /**
     * Indicates a CommonJS module written in javascript.
     */
    CJS = 1 << 1,

    /**
     * Indicates an ESModule written in javascript.
     */
    MJS = 1 << 2,

    /**
     * Indicates any kind of javascript file.
     */
    JS = GenericJS | CJS | MJS,

    /**
     * Indicates generic typescript.
     */
    GenericTS = 1 << 3,

    /**
     * Indicates a CommonJS module written in typescript.
     */
    CTS = 1 << 4,

    /**
     * Indicates an ESModule written in typescript.
     */
    MTS = 1 << 5,

    /**
     * Indicates any kind of typescript file.
     */
    TS = GenericTS | CTS | MTS,

    /**
     * Indicates a generic type-declaration file.
     */
    GenericDTS = 1 << 6,

    /**
     * Indicates a CommonJS type-declaration.
     */
    CDTS = 1 << 7,

    /**
     * Indicates an ESModule type-declaration.
     */
    MDTS = 1 << 8,

    /**
     * Indicates any kind of type-declaration file.
     */
    DTS = GenericDTS | CDTS | MDTS,

    /**
     * Indicates javascript and typescript.
     */
    Scripts = JS | TS,

    /**
     * Indicates all script-kinds.
     */
    All = JS | TS | DTS
}
