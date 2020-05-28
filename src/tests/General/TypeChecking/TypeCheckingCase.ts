import { CLIEngine } from "eslint";
import { RuleSet } from "../../Debugging/RuleSet";
import { ScriptKind } from "../../Debugging/ScriptKind";
import { EngineRunner } from "../../Debugging/Suites/EngineRunner";
import { LintTestCase } from "../../Debugging/Suites/LintTestCase";
import { TestContext } from "../../Debugging/TestContext";

/**
 * Represents a test-case for type-checking.
 */
export class TypeCheckingCase extends LintTestCase
{
    /**
     * A value indicating whether type-checking rules should be loaded.
     */
    private useTypeCheckingRules: boolean;

    /**
     * A value indicating whether type-checking is enabled.
     */
    private typeCheckingEnabled: boolean;

    /**
     * Initializes a new instance of the `TypeCheckingCase` class.
     *
     * @param useTypeCheckingRules
     * A value indicating whether type-checking rules should be loaded.
     *
     * @param enableTypeChecking
     * A value indicating whether the type-checking ruleset should be loaded.
     */
    public constructor(useTypeCheckingRules: boolean, enableTypeChecking: boolean)
    {
        super(
            useTypeCheckingRules ?
                (enableTypeChecking ?
                    "Checking whether rule-sets with type-checking can be used with type-checking enabled…" :
                    "Checking whether using rule-sets with type-checking without type-checking enabled causes an error…") :
                    "Checking whether rule-sets without type-checking can be used in any case…",
            RuleSet.All,
            ScriptKind.All,
            [
                {
                    Valid: enableTypeChecking || (!useTypeCheckingRules),
                    Snippets: [
                        ""
                    ]
                }
            ]);

        this.useTypeCheckingRules = useTypeCheckingRules;
        this.typeCheckingEnabled = enableTypeChecking;
    }

    /**
     * Gets a value indicating whether type-checking rules should be loaded.
     */
    public get UseTypeCheckingRules(): boolean
    {
        return this.useTypeCheckingRules;
    }

    /**
     * Gets a value indicating whether type-checking is enabled.
     */
    public get TypeCheckingEnabled(): boolean
    {
        return this.typeCheckingEnabled;
    }

    /**
     * @inheritdoc
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to add tests for.
     *
     * @returns
     * The CLI-engine for the specified `ruleSet`.
     */
    protected GetCLIEngine(context: TestContext, ruleSet: RuleSet): CLIEngine
    {
        return new CLIEngine(context.GetConfiguration(ruleSet, this.UseTypeCheckingRules, this.TypeCheckingEnabled));
    }

    /**
     * Verifies whether the test-case is applicable.
     *
     * @param engineRunner
     * A component which runs the cli-engine.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected Verify(engineRunner: EngineRunner): boolean
    {
        try
        {
            engineRunner();
            return true;
        }
        catch (e)
        {
            return false;
        }
    }
}
