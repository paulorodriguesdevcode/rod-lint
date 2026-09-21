import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Linter } from 'eslint';
import { base } from '../src/base.js';
import { node } from '../src/node.js';
import { browser } from '../src/browser.js';

const linter = new Linter({ configType: 'flat' });

test('each preset is a non-empty flat config array', () => {
  for (const preset of [base, node, browser]) {
    assert.ok(Array.isArray(preset));
    assert.ok(preset.length > 0);
  }
});

test('base catches double quotes and missing semicolons', () => {
  const messages = linter.verify('const a = "hello"\n', base);
  const ruleIds = messages.map((m) => m.ruleId);
  assert.ok(ruleIds.includes('quotes'));
  assert.ok(ruleIds.includes('semi'));
});

test('base does not flag console usage', () => {
  const messages = linter.verify('console.log(\'hi\');\n', base);
  assert.ok(!messages.some((m) => m.ruleId === 'no-console'));
});

test('node preset recognizes Node globals (no no-undef on process)', () => {
  const messages = linter.verify('console.log(process.env.NODE_ENV);\n', node);
  assert.ok(!messages.some((m) => m.ruleId === 'no-undef'));
});

test('browser preset recognizes browser globals (no no-undef on window)', () => {
  const messages = linter.verify('console.log(window.location);\n', browser);
  assert.ok(!messages.some((m) => m.ruleId === 'no-undef'));
});

test('node preset still flags an actually undefined global', () => {
  const messages = linter.verify('console.log(totallyNotAThing);\n', node);
  assert.ok(messages.some((m) => m.ruleId === 'no-undef'));
});
