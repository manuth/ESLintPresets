import { ScriptKind } from "./ScriptKind.js";
import { Workspace } from "./Workspace.js";

/**
 * Represents a test-context.
 */
export class TestContext
{
    /**
     * The workspace.
     */
    private workspace: Workspace | null = null;

    /**
     * Initializes a new instance of the {@link TestContext `TestContext`} class.
     */
    public constructor()
    { }

    /**
     * Gets or sets the workspace.
     */
    public get Workspace(): Workspace
    {
        if (this.workspace === null)
        {
            this.workspace = new Workspace();
        }

        return this.workspace;
    }

    /**
     * Gets the filename for the specified {@link scriptKind `scriptKind`}.
     *
     * @param scriptKind
     * The script-kind to get the filename for.
     *
     * @returns
     * The filename for the specified {@link scriptKind `scriptKind`}.
     */
    public GetFileName(scriptKind: ScriptKind): string
    {
        return this.Workspace.GetFileName(scriptKind);
    }
}
