import { LintSuite } from "../../Debugging/Suites/LintSuite.mjs";
import { LintTestCase } from "../../Debugging/Suites/LintTestCase.mjs";
import { ITypeCheckingCase } from "./ITypeCheckingCase.mjs";
import { TypeCheckingCase } from "./TypeCheckingCase.mjs";

/**
 * Represents a test-suite for type-checking.
 */
export class TypeCheckingSuite extends LintSuite<ITypeCheckingCase>
{
    /**
     * Initializes a new instance of the {@link TypeCheckingSuite `TypeCheckingSuite`} class.
     */
    public constructor()
    {
        super(
            [
                {
                    UseTypeCheckingRules: false,
                    EnableTypeChecking: false
                },
                {
                    UseTypeCheckingRules: true,
                    EnableTypeChecking: false
                },
                {
                    UseTypeCheckingRules: true,
                    EnableTypeChecking: true
                }
            ]);
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return "TypeChecking";
    }

    /**
     * @inheritdoc
     *
     * @param testCase
     * The properties of the test-case to create.
     *
     * @returns
     * The newly created test-case.
     */
    protected CreateTestCase(testCase: ITypeCheckingCase): LintTestCase
    {
        return new TypeCheckingCase(
            testCase.UseTypeCheckingRules,
            testCase.EnableTypeChecking);
    }
}
