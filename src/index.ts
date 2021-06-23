import { GenerateConfiguration as _GenerateESLintConfiguration } from "./Configuration/GenerateConfiguration";
import Recommended = require("./Configuration/Recommended");
import RecommendedWithTypeChecking = require("./Configuration/RecommendedWithTypeChecking");
import { GenerateConfiguration as _GenerateTSLintConfiguration } from "./Configuration/TSLint/GenerateConfiguration";
import Weak = require("./Configuration/Weak");
import WeakWithTypeChecking = require("./Configuration/WeakWithTypeChecking");
import { ESLintPlugin as _ESLintPlugin } from "./ESLintPlugin";
import { ESLintRule as _ESLintRule } from "./ESLintRule";
import { TSLintRule as _TSLintRule } from "./TSLintRule";

/**
 * Provides presets for `eslint`.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace ESLintPresets
{
    export let configs = {
        recommended: Recommended,
        "recommended-requiring-type-checking": RecommendedWithTypeChecking,
        weak: Weak,
        "weak-requiring-type-checking": WeakWithTypeChecking
    };

    /**
     * Represents an `eslint`-plugin.
     */
    export let ESLintPlugin = _ESLintPlugin;

    /**
     * Indicates an `eslint`-rule.
     */
    export let ESLintRule = _ESLintRule;

    /**
     * Indicates a `tslint`-rule.
     */
    export let TSLintRule = _TSLintRule;

    /**
     * Generates an `eslint`-configuration.
     */
    export let GenerateESLintConfiguration = _GenerateESLintConfiguration;

    /**
     * Generates a `tslint`-configuration.
     */
    export let GenerateTSLintConfiguration = _GenerateTSLintConfiguration;
}

export = ESLintPresets;
