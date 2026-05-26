import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const read = (file) => readFileSync(file, 'utf8');

test('results card renders and translates the ideal weight note', () => {
  const metrics = read('src/components/MetricsCard.astro');
  const translations = read('src/data/translations.ts');
  const page = read('src/pages/index.astro');

  assert.match(metrics, /id="ideal-weight-note"/);
  assert.match(metrics, /Catatan: Berat badan ideal dikira berdasarkan berat badan anda pada BMI 22 kg\/m²\./);
  assert.match(translations, /idealWeightNote: 'Catatan: Berat badan ideal dikira berdasarkan berat badan anda pada BMI 22 kg\/m²\.'/);
  assert.match(translations, /idealWeightNote: 'Note: Ideal body weight is calculated based on your weight at BMI 22 kg\/m²\.'/);
  assert.match(page, /getElementById\('ideal-weight-note'\)!\.textContent = tx\.idealWeightNote;/);
});

test('meal kcal label is the heading and the old meal heading is not rendered', () => {
  const mealCard = read('src/components/MealPlanCard.astro');
  const page = read('src/pages/index.astro');

  assert.match(mealCard, /<h2 class="meal-title" id="l-menu-title">Contoh menu<\/h2>/);
  assert.doesNotMatch(mealCard, /id="l-mealplan"/);
  assert.doesNotMatch(mealCard, /Contoh menu yang disarankan dalam sehari/);
  assert.doesNotMatch(page, /getElementById\('l-mealplan'\)/);
});
