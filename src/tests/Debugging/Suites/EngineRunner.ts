import { CLIEngine } from "eslint";

/**
 * Provides the functionality to run the engine.
 */
export type EngineRunner =
    /**
     * Runs the engine.
     *
     * @returns
     * The result of the `CLIEngine`.
     */
    () => CLIEngine.LintReport;
