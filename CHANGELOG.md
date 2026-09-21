# Changelog

All notable changes to this project are documented here.
This project follows [Semantic Versioning](https://semver.org/).

## [2.0.0] - 2026-09-21

### Changed
- Complete rewrite as an ESLint 9+ flat-config package. Breaking change from
  any previous 1.x release (legacy `.eslintrc` format, different exports) —
  version bumped to 2.0.0 because npm permanently blocks republishing under
  a version number a package has used before, even after unpublishing.

### Added
- Three presets: `base`, `node`, `browser`.
- Test suite that exercises each preset through ESLint's own `Linter` API
  instead of just asserting on the shape of the config object.
- CI via GitHub Actions, matrix-tested on Node 18/20/22.
