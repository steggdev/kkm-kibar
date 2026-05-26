import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const files = [
  'src/data/translations.ts',
  'src/components/Hero.astro',
  'src/pages/index.astro',
  'kibar-calculator-final.html',
];

const contents = Object.fromEntries(
  files.map((file) => [file, readFileSync(file, 'utf8')]),
);

test('uses KiBaR casing everywhere initiative text is rendered', () => {
  for (const [file, text] of Object.entries(contents)) {
    assert(!text.includes('INISIATIF KIBAR (KIRA, BAKAR, REKOD)'), file);
  }

  assert.match(contents['src/data/translations.ts'], /INISIATIF KiBaR \(KIRA, BAKAR, REKOD\)/);
  assert.match(contents['src/components/Hero.astro'], /INISIATIF KiBaR \(KIRA, BAKAR, REKOD\)/);
  assert.match(contents['kibar-calculator-final.html'], /INISIATIF KiBaR \(KIRA, BAKAR, REKOD\)/);
});

test('removes the KKM guidelines hero meta item', () => {
  for (const [file, text] of Object.entries(contents)) {
    assert(!text.includes('Berdasarkan'), file);
    assert(!text.includes('Based on'), file);
    assert(!text.includes('Garis panduan KKM'), file);
    assert(!text.includes('Garis Panduan KKM'), file);
    assert(!text.includes('KKM guidelines'), file);
    assert(!text.includes('KKM Guidelines'), file);
  }

  assert.doesNotMatch(contents['src/pages/index.astro'], /getElementById\('m1'\)/);
  assert.doesNotMatch(contents['kibar-calculator-final.html'], /getElementById\('m1'\)/);
});
