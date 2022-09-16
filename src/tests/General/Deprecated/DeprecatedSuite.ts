import { LintSuite } from "../../Debugging/Suites/LintSuite.js";
import { LintTestCase } from "../../Debugging/Suites/LintTestCase.js";
import { DeprecatedCase } from "./DeprecatedCase.js";

/**
 * Represents a test-suite for deprecated rules.
 */
export class DeprecatedSuite extends LintSuite<[]>
{
    /**
     * Initializes a new instance of the {@link DeprecatedSuite `DeprecatedSuite`} class.
     */
    public constructor()
    {
        super([[]]);
    }

    /**
     * @inheritdoc
     */
    public get SuiteName(): string
    {
        return "DeprecatedRules";
    }

    /**
     * @inheritdoc
     *
     * @returns
     * The newly created test-case.
     */
    protected CreateTestCase(): LintTestCase
    {
        return new DeprecatedCase();
    }
}
