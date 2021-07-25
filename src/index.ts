import { GenerateConfiguration as _GenerateESLintConfiguration } from "./Configuration/GenerateConfiguration";
import { GenerateConfiguration as _GenerateTSLintConfiguration } from "./Configuration/TSLint/GenerateConfiguration";
import { ESLintPlugin as _ESLintPlugin } from "./ESLintPlugin";
import { ESLintRule as _ESLintRule } from "./ESLintRule";
import { PresetName, PresetName as _PresetName } from "./PresetName";
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

    let cache: Map<PresetName, any> = new Map();

    /**
     * Loads the preset with the specified {@link presetName `presetName`}.
     *
     * @param presetName
     * The name of the preset to load.
     *
     * @returns
     * The preset with the specified {@link presetName `presetName`}.
     */
    function LoadPreset(presetName: PresetName): any
    {
        if (!cache.has(presetName))
        {
            let weak: boolean;
            let typeChecking: boolean;

            switch (presetName)
            {
                case PresetName.Recommended:
                case PresetName.RecommendedWithTypeChecking:
                    weak = false;
                    break;
                default:
                    weak = true;
                    break;
            }

            switch (presetName)
            {
                case PresetName.RecommendedWithTypeChecking:
                case PresetName.WeakWithTypeChecking:
                    typeChecking = true;
                    break;
                default:
                    typeChecking = false;
                    break;
            }

            cache.set(presetName, GenerateESLintConfiguration(weak, typeChecking));
        }

        return cache.get(presetName);
    }

    /**
     * Provides configurations for `eslint`.
     */
    export let configs = {
        get [PresetName.Recommended]()
        {
            return LoadPreset(PresetName.Recommended);
        },
        get [PresetName.RecommendedWithTypeChecking]()
        {
            return LoadPreset(PresetName.RecommendedWithTypeChecking);
        },
        get [PresetName.Weak]()
        {
            return LoadPreset(PresetName.Weak);
        },
        get [PresetName.WeakWithTypeChecking]()
        {
            return LoadPreset(PresetName.WeakWithTypeChecking);
        }
    };
}

export = ESLintPresets;
