import { GenerateConfiguration } from "./Configuration/GenerateConfiguration.cjs";
import { PresetName } from "./PresetName.cjs";

export { ESLintPlugin } from "./ESLintPlugin.cjs";
export { ESLintRule } from "./ESLintRule.cjs";
export { PresetName } from "./PresetName.cjs";
export { TSLintRule } from "./TSLintRule.cjs";
export { GenerateConfiguration as GenerateESLintConfiguration } from "./Configuration/GenerateConfiguration.cjs";
export { GenerateConfiguration as GenerateTSLintConfiguration } from "./Configuration/TSLint/GenerateConfiguration.cjs";

/**
 * The name of the plugin.
 */
export const PluginName = "@manuth/typescript";

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

        cache.set(presetName, GenerateConfiguration(weak, typeChecking));
    }

    return cache.get(presetName);
}

/**
 * Provides configurations for `eslint`.
 */
export const configs = {
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
