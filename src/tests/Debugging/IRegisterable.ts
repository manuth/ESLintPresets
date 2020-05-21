import { RuleSet } from "./RuleSet";
import { TestContext } from "./TestContext";

/**
 * Represents a registerable element.
 */
export interface IRegisterable
{
    /**
     * Registers the `mocha`-tests.
     *
     * @param context
     * The test-context.
     *
     * @param ruleSet
     * The rule-set to add tests for.
     */
    Register(context: TestContext, ruleSet: RuleSet): void;
}
