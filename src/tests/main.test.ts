import { RegisterableContainer } from "./Debugging/RegisterableContainer.js";
import { RuleSet } from "./Debugging/RuleSet.js";
import { TestContext } from "./Debugging/TestContext.js";
import { GeneralTests } from "./General/index.test.js";
import { RuleSetsTests } from "./RuleSets/index.test.js";

suite(
    "ESLintPresets",
    () =>
    {
        let context = new TestContext();

        suiteSetup(
            async function()
            {
                this.timeout(10 * 1000);
                this.slow(5 * 1000);
                await context.Workspace.Initialize();
            });

        new RegisterableContainer(
            [
                GeneralTests,
                RuleSetsTests
            ]).Register(context, RuleSet.All);

        suiteTeardown(
            () =>
            {
                context.Workspace.Dispose();
            });
    });
