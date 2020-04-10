import { TestContext } from "./Debugging/TestContext";
import { Workspace } from "./Debugging/Workspace";
import { RuleTests } from "./Rules";

suite(
    "ESLintPresets",
    () =>
    {
        let context = new TestContext();

        suiteSetup(
            async function()
            {
                this.enableTimeouts(false);
                context.Workspace = new Workspace();
                await context.Workspace.Initialize();
            });

        for (let ruleTest of RuleTests)
        {
            ruleTest.Register(context);
        }

        suiteTeardown(
            () =>
            {
                context.Workspace.Dispose();
            });
    });
