import { RegisterableContainer } from "./Debugging/RegisterableContainer";
import { RuleSet } from "./Debugging/RuleSet";
import { TestContext } from "./Debugging/TestContext";
import { Workspace } from "./Debugging/Workspace";
import { GeneralTests } from "./General";
import { RuleSetsTests } from "./RuleSets";

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
                context.Workspace = new Workspace();
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
