# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## ESLintPresets [Unreleased]
### Fixed
  - The use of the presets without type checking

### Added
  - The `eslint-comments` plugin for linting `eslint-enable` and `eslint-disable` comments
  - Unit tests for the newly added rules

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.3.4...dev)

## ESLintPresets v3.3.4
### Fixed
  - Dependency issues

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.3.3...v3.3.4)

## ESLintPresets v3.3.3
### Fixed
  - The use of this package in ESModule environments by refactoring `exports` in the `package.json` file

### Added
  - Support for importing this package's `package.json` file
  - Steps to the drone-pipeline for ensuring that the module is published without any errors

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.3.2...v3.3.3)

## ESLintPresets v3.3.2
### Fixed
  - Type declarations by adding missing dependencies

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.3.1...v3.3.2)

## ESLintPresets v3.3.1
### Add
  - `exports` directive to the `package.json` file

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.3.0...v3.3.1)

## ESLintPresets v3.3.0
### Added
  - Support for ESModule and CommonJS files such as `.cjs`, `.mjs`, `.cts` and `.mts`
  - Unit tests for ESModule and CommonJS files

### Updated
  - All dependencies
  - All unit test files to ESModules
  - All `node` imports to `node:`-urls

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.10...v3.3.0)

## ESLintPresets v3.2.10
### Fixed
  - All vulnerabilities in dependencies
  - Test timeouts

### Updated
  - Linting environment
  - All dependencies
  - Deprecated rules
    - `@typescript-eslint/no-parameter-properties` has been replaced by `@typescript-eslint/parameter-properties`
  - Automated build pipelines

### Added
  - Reports for the use of deprecated rules while testing

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.6...v3.2.10)

## ESLintPresets v3.2.6
### Fixed
  - Vulnerabilities in dependencies
  - Broken ruleset by replacing `eslint-plugin-deprecation` with `@delagen/eslint-plugin-deprecation`

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.5...v3.2.6)

## ESLintPresets v3.2.5
### Fixed
  - Vulnerabilities in dependencies
  - Broken publish-script in drone-pipeline

### Updated
  - All dependencies
  - Settings to disable timeouts for mocha unit-tests

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.4...v3.2.5)

## ESLintPresets v3.2.4
### Updated
  - All dependencies

### Added
  - Support for caching the presets for improving performance

### Fixed
  - Drone-pipelines by preventing steps from interrupting each other

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.3...v3.2.4)

## ESLintPresets v3.2.3
### Added
  - Support for loading presets lazily

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.2...v3.2.3)

## ESLintPresets v3.2.2
### Added
  - An exported member `PluginName` for getting the name of this plugin

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.1...v3.2.2)

## ESLintPresets v3.2.1
### Added
  - A rule for forcing new-lines after import-statements
  - Rule-settings for requiring jsdoc-comments to be added to exported variables
  - Support for parallel step-execution of drone-pipelines

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.2.0...v3.2.1)

## ESLintPresets v3.2.0
### Added
  - An exported member `PresetName` for getting the names of the presets

### Updated
  - The `jsdoc/require-description`-settings to require descriptions for abstract class-fields
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.1.3...v3.2.0)

## ESLintPresets v3.1.3
### Removed
  - The `constructor-super` rule

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.1.2...v3.1.3)

## ESLintPresets v3.1.2
### Removed
  - Unnecessary dependency

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.1.1...v3.1.2)

## ESLintPresets v3.1.1
### Fixed
  - `ts-patch`-installation by adding `ts-node` to `devDependencies`

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.1.0...v3.1.1)

## ESLintPresets v3.1.0
### Fixed
  - Broken `eslint` Linter creation for test-cases
  - Broken tests
  - Usage of `@typescript-eslint/tslint/config`-rule for configurations without type-checking

### Added
  - Support for the Test Explorer UI
  - Rules for disallowing the use of unpublished files or modules
  - Rules for preventing the use of packages which aren't specified in `package.json`
  - Improvements to the development-environment

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.0.2...v3.1.0)

## ESLintPresets v3.0.2
### Updated
  - All dependencies
  - The settings to disable `import/no-default-export` for `.d.ts`-files
  - Unit-tests
  - `spaced-comment` settings to allow triple-slash references

### Added
  - Missing unit-tests

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.0.1...v3.0.2)

## ESLintPresets v3.0.1
### Updated
  - All dependencies
  - `@typescript-eslint/no-confusing-void-expression` back to `tslint`s `no-void-expression`

### Added
  - `override`-flags to all overridden members

[Show differences](https://github.com/manuth/ESLintPresets/compare/v3.0.0...v3.0.1)

## ESLintPresets v3.0.0
### Breaking
  - Updated `eslint-plugin-jsdoc` to `35.0.0`

### Fixed
  - The debug-experience by specifying the `outFiles` and skipping `typescript`s `debugger`-statements

### Updated
  - All dependencies
  - The way to print error-messages while linting to improve debugging-experience
  - Settings to replace `tslint`s `no-void-expression` with `@typescript-eslint/no-confusing-void-expression`

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.10...v3.0.0)

## ESLintPresets v2.3.10
### Updated
  - All dependencies

### Fixed
  - Broken drone-pipelines

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.9...v2.3.10)

## ESLintPresets v2.3.9
### Fixed
  - Broken drone-pipelines
  - Broken Auto-Merge workflow

### Updated
  - All dependencies
  - Drone-pipelines to use small-sized images

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.8...v2.3.9)

## ESLintPresets v2.3.8
### Fixed
  - Vulnerabilities in dependencies

### Added
  - A workflow for merging Dependabot-PRs
  - A workflow for analyzing the code

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.7...v2.3.8)

## ESLintPresets v2.3.7
### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.6...v2.3.7)

## ESLintPresets v2.3.6
### Updated
  - Missing dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.5...v2.3.6)

## ESLintPresets v2.3.5
### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.4...v2.3.5)

## ESLintPresets v2.3.4
### Fixed
  - Broken dependabot-settings

### Updated
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.3...v2.3.4)

## ESLintPresets v2.3.3
### Updated
  - The mocha-timeouts
  - The development-environment
  - All dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.2...v2.3.3)

## ESLintPresets v2.3.2
### Fixed
  - Incorrect plugin-declaration of configurations with type-checking

### Removed
  - Redundant dependencies

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.1...v2.3.2)

## ESLintPresets v2.3.1
### Added
  - Rules for preventing deprecated components
  - Configurations for dependabot

### Updated
  - All dependencies
  - Deprecated API-usage

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.3.0...v2.3.1)

## ESLintPresets v2.3.0
### Added
  - A dependabot configuration

### Updated
  - The tests for improving the stability of the code
  - The rule-sets to disable the `no-use-before-define` rule
  - The development environment

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.2.1...v2.3.0)

## ESLintPresets v2.2.1
### Updated
  - The `tslint`-configuration to allow void expressions

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.2.0...v2.2.1)

## ESLintPresets v2.2.0
### Updated
  - Configuration to not require jsdoc-comments for `TSFunctionType`s
  - Rules to allow explicit `any`-types in parameter- and return-types
  - Member-Ordering rule
    - Members must be grouped by their type and access
    - Static members of the same type and access must occur first
    - The order of abstract/non-abstract members of the same type and access is irrelevant
  - The `@typescript-eslint/no-unused-expressions`-rule to allow side-effects
  - The `@typescript-eslint/no-unused-vars` to allow unused function-parameters
  - The `generator-star-spacing` to equal VSCode's formatter
  - The `import/order`-rule to be case-insensitive
  - The `tslint`-configuration to
    - Enforce the order of named import-components
    - Disallow `return;`-statements in value-returning functions
    - Disallow `return undefined;`-statements in void functions
    - Force the name of `default` imports to match the exported component
    - Disallow incorrect usage of void expressions

### Added
  - Support for the usage of the `delete`-statement
  - The functionality to create separate `tslint.json`-configurations for the weak and the recommended rule-set

### Removed
  - The JSDoc-enforcement for inline-statements such as
    - `ClassExpression`s
    - `FunctionExpression`s
    - `TSFunctionType`s

### Updated
  - The unit-tests to print the code-snippet which caused the failure

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.2.0...dev)

## ESLintPresets v2.1.2
### Added
  - Support for typescript jsdoc-tags

### Updated
  - Configuration to not report `ts-<directive>` comments

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.1.1...v2.1.2)

## ESLintPresets v2.1.1
### Updated
  - The `require-returns` rule to only require a `@returns`-tag for non-`void` functions

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.1.0...2.1.1)

## ESLintPresets v2.1.0
The new version of `eslint-plugin-import` supports typescript's `TSImportEqualsDeclaration`s.

### Added
  - `peerDependencies` where necessary

### Updated
  - All packages

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.0.1...v2.1.0)

## ESLintPresets v2.0.1
### Updated
  - The plugin to exclude an unnecessary dependency

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.0.0...v2.0.1)

## ESLintPresets v2.0.0
As the shareable configurations weren't even added to the module-exports, the configurations didn't work.  
This is fixed now and the plugin can be used now.

### Updated
  - JSDoc-rules to only require jsdoc-comments for variables which are arrow-functions
  - All dependencies

### Added
  - The actual configurations to the module exports

### Fixed
  - The shareable configurations

[Show differences](https://github.com/manuth/ESLintPresets/compare/v1.0.1...v2.0.0)

## ESLintPresets v1.0.1
### Fixed
  - TSLint-related rules

[Show differences](https://github.com/manuth/ESLintPresets/compare/v1.0.0...v1.0.1)

## ESLintPresets v1.0.0
  - Initial release

### Added
  - ESLint configuration presets
  - Weak and strong presets
  - Tests for verifying the functionality of each configured rule

### Fixed
  - Several errors in the drone-pipeline
  - Automated publishing

[Show differences](https://github.com/manuth/ESLintPresets/compare/48b733299c51da3f2c2a8c4f514d6d96d9b78d62...v1.0.0)
