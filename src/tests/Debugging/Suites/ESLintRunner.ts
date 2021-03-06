import { ESLint } from "eslint";

/**
 * Provides the functionality to run `eslint`.
 */
export type ESLintRunner =
    /**
     * Runs the linter.
     *
     * @returns
     * The result of the lint.
     */
    () => Promise<ESLint.LintResult[]>;
