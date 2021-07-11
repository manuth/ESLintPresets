import { GenerateConfiguration as _GenerateESLintConfiguration } from "./Configuration/GenerateConfiguration";
import Recommended = require("./Configuration/Recommended");
import RecommendedWithTypeChecking = require("./Configuration/RecommendedWithTypeChecking");
import { GenerateConfiguration as _GenerateTSLintConfiguration } from "./Configuration/TSLint/GenerateConfiguration";
import Weak = require("./Configuration/Weak");
import WeakWithTypeChecking = require("./Configuration/WeakWithTypeChecking");
import { ESLintPlugin as _ESLintPlugin } from "./ESLintPlugin";
import { ESLintRule as _ESLintRule } from "./ESLintRule";
import { PresetName as _PresetName } from "./PresetName";
import { TSLintRule as _TSLintRule } from "./TSLintRule";

/**
 * Provides presets for `eslint`.
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
namespace ESLintPresets
{
    /**
     * Represents an `eslint`-plugin.
     */
    export let ESLintPlugin = _ESLintPlugin;

    /**
     * Indicates an `eslint`-rule.
     */
    export let ESLintRule = _ESLintRule;

    /**
     * Represents a configuration-preset.
     */
    export let PresetName = _PresetName;

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

    /**
     * Gets the name of the plugin.
     */
    export let PluginName = "@manuth/typescript";

    /**
     * Provides configurations for `eslint`.
     */
    export let configs = {
        [PresetName.Recommended]: Recommended,
        [PresetName.RecommendedWithTypeChecking]: RecommendedWithTypeChecking,
        [PresetName.Weak]: Weak,
        [PresetName.WeakWithTypeChecking]: WeakWithTypeChecking
    };
}

export = ESLintPresets;
