import { RegisterableContainer } from "./Debugging/RegisterableContainer.mjs";
import { RuleSet } from "./Debugging/RuleSet.mjs";
import { TestContext } from "./Debugging/TestContext.mjs";
import { GeneralTests } from "./General/index.mjs";
import { RuleSetsTests } from "./RuleSets/index.mjs";

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
