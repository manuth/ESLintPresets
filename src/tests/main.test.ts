import { RegisterableContainer } from "./Debugging/RegisterableContainer";
import { RuleSet } from "./Debugging/RuleSet";
import { TestContext } from "./Debugging/TestContext";
import { Workspace } from "./Debugging/Workspace";
import RuleSets = require("./RuleSets");
import General = require("./General");

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

        new RegisterableContainer(
            [
                General,
                RuleSets
            ]).Register(context, RuleSet.All);

        suiteTeardown(
            () =>
            {
                context.Workspace.Dispose();
            });
    });
