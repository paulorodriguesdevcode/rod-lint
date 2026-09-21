# rod-lint

[![CI](https://github.com/paulorodriguesdevcode/rod-lint/actions/workflows/ci.yml/badge.svg)](https://github.com/paulorodriguesdevcode/rod-lint/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/rod-lint.svg)](https://www.npmjs.com/package/rod-lint)
[![license](https://img.shields.io/npm/l/rod-lint.svg)](LICENSE)

Small, dependency-light ESLint 9+ flat-config presets — `base`, `node`, `browser` — each one tested through ESLint's own `Linter` API, not just asserted on shape.

## Why

Most personal ESLint configs are copy-pasted once, committed, and never touched again — no test proves they still do what they claim after an ESLint major bump. This package is scoped deliberately small (three presets, a handful of rules) so the whole thing can be tested end to end: every preset is fed real code through `new Linter({ configType: 'flat' })` and the test asserts the exact rule violations it's supposed to catch.

## Install

```bash
npm install --save-dev rod-lint eslint
```

`eslint` is a peer dependency (`^9.0.0 || ^10.0.0`) — bring your own version.

## Usage

`eslint.config.js`:

```js
import { node } from 'rod-lint';

export default [
  ...node,
  // your own overrides/additions
];
```

Available presets:

| Import | Extends | Adds |
|---|---|---|
| `rod-lint` / `rod-lint/base` → `base` | `@eslint/js` recommended | `semi`, `quotes`, `indent`, `no-unused-vars` (warn, `_`-prefixed args ignored), `no-console: off` |
| `rod-lint/node` → `node` | `base` | Node.js globals (`process`, `__dirname`, ...), ES2022 modules |
| `rod-lint/browser` → `browser` | `base` | Browser globals (`window`, `document`, `fetch`, ...), ES2022 modules |

Each preset is a flat-config array — spread it into your own config and add or override rules after it, same as any other shareable flat config.

## Development

```bash
npm install
npm run lint   # dogfoods rod-lint/node on this repo
npm test       # node --test, verifies each preset via ESLint's Linter API
```

## License

MIT
