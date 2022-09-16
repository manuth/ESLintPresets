import { ESLint } from "eslint";
import { RuleSet } from "../../Debugging/RuleSet.js";
import { ScriptKind } from "../../Debugging/ScriptKind.js";
import { ESLintRunner } from "../../Debugging/Suites/ESLintRunner.js";
import { LintTestCase } from "../../Debugging/Suites/LintTestCase.js";
import { TestContext } from "../../Debugging/TestContext.js";

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
     * Initializes a new instance of the {@link TypeCheckingCase `TypeCheckingCase`} class.
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
     * The linter for the specified {@link ruleSet `ruleSet`}.
     */
    protected override GetLinter(context: TestContext, ruleSet: RuleSet): ESLint
    {
        return new ESLint(context.Workspace.GetConfiguration(ruleSet, this.UseTypeCheckingRules, this.TypeCheckingEnabled));
    }

    /**
     * Verifies whether the test-case is applicable.
     *
     * @param engineRunner
     * A component which runs `eslint`.
     *
     * @returns
     * A value indicating whether the test-case is applicable.
     */
    protected async Verify(engineRunner: ESLintRunner): Promise<boolean>
    {
        try
        {
            let result = await engineRunner();
            return result.flatMap((lintResult) => lintResult.messages).length === 0;
        }
        catch (e)
        {
            return false;
        }
    }
}
