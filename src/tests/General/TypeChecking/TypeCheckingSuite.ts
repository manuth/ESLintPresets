import { LintSuite } from "../../Debugging/Suites/LintSuite";
import { LintTestCase } from "../../Debugging/Suites/LintTestCase";
import { ITypeCheckingCase } from "./ITypeCheckingCase";
import { TypeCheckingCase } from "./TypeCheckingCase";

/**
 * Represents a test-suite for type-checking.
 */
export class TypeCheckingSuite extends LintSuite<ITypeCheckingCase>
{
    /**
     * Initializes a new instance of the `TypeCheckingSuite` class.
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
