import { RuleSet } from "./Debugging/RuleSet";
import { SuiteRunner } from "./Debugging/SuiteRunner";
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

        new SuiteRunner(
            [
                RuleSets
            ]).Register(context, RuleSet.All);

        suiteTeardown(
            () =>
            {
                context.Workspace.Dispose();
            });
    });
