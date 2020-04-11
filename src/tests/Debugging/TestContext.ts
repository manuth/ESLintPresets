import { CLIEngine } from "eslint";
import { TestConstants } from "../TestConstants";
import { RuleSet } from "./RuleSet";
import { ScriptKind } from "./ScriptKind";
import { Workspace } from "./Workspace";
import merge = require("lodash.merge");

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
     * The engines for the specific rule-sets.
     */
    private engines: Map<RuleSet, Map<boolean, CLIEngine>> = new Map();

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

    /**
     * Gets the `CLIEngine` for the specified `ruleSet`.
     *
     * @param ruleSet
     * The rule-set to get the `CLIEngine` for.
     *
     * @param typeChecking
     * A value indicating whether type-checking should be enabled.
     *
     * @returns
     * The `CLIEngine` for the specified `ruleSet`.
     */
    public GetCLIEngine(ruleSet: RuleSet, typeChecking: boolean): CLIEngine
    {
        if (!this.engines.has(ruleSet))
        {
            this.engines.set(ruleSet, new Map());
        }

        if (!this.engines.get(ruleSet).has(typeChecking))
        {
            this.engines.get(ruleSet).set(
                typeChecking,
                new CLIEngine(
                    {
                        useEslintrc: false,
                        baseConfig: typeChecking ?
                            merge(
                            {
                                parserOptions: {
                                    project: this.Workspace.TSConfigFileName
                                }
                            },
                            TestConstants.RuleSetConfigurationsWithTypeChecking[ruleSet]) :
                            TestConstants.RuleSetConfigurations[ruleSet]
                    }));
        }

        return this.engines.get(ruleSet).get(typeChecking);
    }

    /**
     * Gets the filename for the specified `scriptKind`.
     *
     * @param scriptKind
     * The script-kind to get the filename for.
     *
     * @returns
     * The filename for the specified `scriptKind`.
     */
    public GetFileName(scriptKind: ScriptKind): string
    {
        return this.Workspace.GetFileName(scriptKind);
    }
}
