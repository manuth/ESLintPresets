import { ESLint, Linter } from "eslint";
import merge = require("lodash.merge");
import { TestConstants } from "../TestConstants";
import { RuleSet } from "./RuleSet";
import { ScriptKind } from "./ScriptKind";
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
     * The linters for the specific rule-sets.
     */
    private linters: Map<RuleSet, Map<boolean, ESLint>> = new Map();

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
        return this.workspace;
    }

    /**
     * @inheritdoc
     */
    public set Workspace(value: Workspace)
    {
        this.workspace = value;
    }

    /**
     * Gets a specific configuration.
     *
     * @param ruleSet
     * The rule-set to get the configuration for.
     *
     * @param useTypeCheckingRules
     * A value indicating whether type-checking rules should be loaded.
     *
     * @param enableTypeChecking
     * A value indicating whether the type-checking should be enabled.
     *
     * @returns
     * The configuration for the specified {@link ruleSet `ruleSet`}.
     */
    public GetConfiguration(ruleSet: RuleSet, useTypeCheckingRules: boolean, enableTypeChecking: boolean): ESLint.Options
    {
        return {
            useEslintrc: false,
            baseConfig: merge<Linter.Config<Linter.RulesRecord>, Linter.Config<Linter.RulesRecord>>(
                enableTypeChecking ?
                    {
                        parserOptions: {
                            project: this.Workspace.TSConfigFileName
                        }
                    } :
                    {},
                (useTypeCheckingRules ?
                    TestConstants.RuleSetConfigurationsWithTypeChecking :
                    TestConstants.RuleSetConfigurations)[ruleSet])
        };
    }

    /**
     * Gets the linter for the specified {@link ruleSet `ruleSet`}.
     *
     * @param ruleSet
     * The rule-set to get the linter for.
     *
     * @param typeChecking
     * A value indicating whether type-checking should be enabled.
     *
     * @returns
     * The linter for the specified {@link ruleSet `ruleSet`}.
     */
    public GetLinter(ruleSet: RuleSet, typeChecking: boolean): ESLint
    {
        if (!this.linters.has(ruleSet))
        {
            this.linters.set(ruleSet, new Map());
        }

        if (!this.linters.get(ruleSet).has(typeChecking))
        {
            let configuration = this.GetConfiguration(ruleSet, typeChecking, typeChecking);

            this.linters.get(ruleSet).set(
                typeChecking,
                new ESLint(
                    {
                        ...configuration,
                        baseConfig: {
                            ...configuration.baseConfig,
                            env: {
                                node: true,
                                es6: true
                            }
                        }
                    }));
        }

        return this.linters.get(ruleSet).get(typeChecking);
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
