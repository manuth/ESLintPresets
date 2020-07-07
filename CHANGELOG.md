# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## ESLintPresets [unreleased]
### Updated
  - Configuration to not require jsdoc-comments for `TSFunctionType`s

[Show differences](https://github.com/manuth/ESLintPresets/compare/v2.1.2...dev)

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
The new version of `eslint-plugin-import` supports tyescript's `TSImportEqualsDeclaration`s.

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
  - JSDoc-rules to only require jsdocs for variables which are arrow-functions
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
