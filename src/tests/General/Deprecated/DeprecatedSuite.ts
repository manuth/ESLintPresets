import { LintSuite } from "../../Debugging/Suites/LintSuite";
import { LintTestCase } from "../../Debugging/Suites/LintTestCase";
import { DeprecatedCase } from "./DeprecatedCase";

/**
 * Represents a test-suite for deprecated rules.
 */
export class DeprecatedSuite extends LintSuite<[]>
{
    /**
     * Initializes a new instance of the `DeprecatedSuite` class.
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
