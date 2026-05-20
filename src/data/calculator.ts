import type { BmiCat } from './translations';
import type { SampleMenuKey } from './mealPlans';

export function getCalorieFactor(bmiCat: BmiCat, activity: string): number {
  const table: Record<BmiCat, Record<string, number>> = {
    uw: { sedentary: 35, moderate: 40, active: 45 },
    normal: { sedentary: 30, moderate: 35, active: 40 },
    ow: { sedentary: 22.5, moderate: 27.5, active: 32.5 },
    ob: { sedentary: 22.5, moderate: 27.5, active: 32.5 }
  };
  return table[bmiCat][activity];
}

export function getSampleMenuKey(kcal: number): SampleMenuKey {
  if (kcal < 1500) return '1200';
  if (kcal < 1800) return '1500';
  if (kcal < 2000) return '1800';
  return '2000';
}
