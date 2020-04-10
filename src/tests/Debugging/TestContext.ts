import { Workspace } from "./Workspace";

/**
 * Represents a test-context.
 */
export class TestContext
{
    /**
     * The workspace.
     */
    private workspace: Workspace = null;

    /**
     * Initializes a new instance of the `TestContext` class.
     */
    public constructor()
    { }

    /**
     * Gets or sets the workspace.
     */
    public get Workspace(): Workspace
    {
        return this.workspace;
    }

    /**
     * @inheritdoc
     */
    public set Workspace(value)
    {
        this.workspace = value;
    }
}
