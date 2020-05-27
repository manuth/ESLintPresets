# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## ESLintPresets [unreleased]
As the shareable configurations weren't even added to the module-exports, the configurations didn't work.  
This is fixed now and the plugin can be used now.

### Added
  - The actual configurations to the module exports

### Fixed
  - The shareable configurations

[Show differences](https://github.com/manuth/ESLintPresets/compare/v1.0.1...dev)

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
