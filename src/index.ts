import { GenerateConfiguration as _GenerateESLintConfiguration } from "./Configuration/GenerateConfiguration";
import { GenerateConfiguration as _GenerateTSLintConfiguration } from "./Configuration/TSLint/GenerateConfiguration";
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
        get [PresetName.Recommended]()
        {
            return GenerateESLintConfiguration(false, false);
        },
        get [PresetName.RecommendedWithTypeChecking]()
        {
            return GenerateESLintConfiguration(false, true);
        },
        get [PresetName.Weak]()
        {
            return GenerateESLintConfiguration(true, false);
        },
        get [PresetName.WeakWithTypeChecking]()
        {
            return GenerateESLintConfiguration(true, true);
        }
    };
}

export = ESLintPresets;
