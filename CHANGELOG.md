# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-09-21

### Added
- Rewritten as an ESLint 9+ flat-config package (previous 1.0.x releases used
  the legacy `.eslintrc` format and are unpublished).
- Three presets: `base`, `node`, `browser`.
- Test suite that exercises each preset through ESLint's own `Linter` API
  instead of just asserting on the shape of the config object.
- CI via GitHub Actions, matrix-tested on Node 18/20/22.
