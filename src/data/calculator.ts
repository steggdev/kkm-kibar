import type { BmiCat, Language } from './translations';
import { mealPlans } from './mealPlans';

export function getCalorieFactor(bmiCat: BmiCat, activity: string): number {
  const table: Record<BmiCat, Record<string, number>> = {
    uw: { sedentary: 35, moderate: 40, active: 45 },
    normal: { sedentary: 30, moderate: 35, active: 40 },
    ow: { sedentary: 22.5, moderate: 27.5, active: 32.5 },
    ob: { sedentary: 22.5, moderate: 27.5, active: 32.5 }
  };
  return table[bmiCat][activity];
}

export function formatTime(val: string, lang: Language): string {
  const [hStr, mStr] = val.split(':');
  const h = Number(hStr);
  const m = Number(mStr);
  
  if (lang === 'bm') {
    const suffix = h < 12 ? 'pagi' : h < 18 ? 'petang' : 'malam';
    const hd = h > 12 ? h - 12 : h;
    return `${hd}:${m.toString().padStart(2, '0')} ${suffix}`;
  } else {
    const suffix = h < 12 ? 'am' : 'pm';
    const hd = h > 12 ? h - 12 : h === 0 ? 12 : h;
    return `${hd}:${m.toString().padStart(2, '0')} ${suffix}`;
  }
}

export function getSnackTimes(bf: string, lu: string, di: string, lang: Language): { snack1: string, snack2: string } {
  const toMins = (t: string) => { 
    const [h, m] = t.split(':').map(Number); 
    return h * 60 + m; 
  };
  const toTime = (m: number) => `${Math.floor(m / 60)}:${(m % 60).toString().padStart(2, '0')}`;
  
  const s1 = Math.round((toMins(bf) + toMins(lu)) / 2 / 30) * 30;
  const s2 = Math.round((toMins(lu) + toMins(di)) / 2 / 30) * 30;
  
  return { 
    snack1: formatTime(toTime(s1), lang), 
    snack2: formatTime(toTime(s2), lang) 
  };
}

export function getMealPlanKey(bmiCat: BmiCat, kcal: number, activity: string): string {
  const bucket = kcal < 1400 ? 'low' : kcal < 1800 ? 'mid' : kcal < 2200 ? 'high' : 'vhigh';
  let tier: string;
  
  if (bmiCat === 'ob' || bmiCat === 'ow') tier = 'clean';
  else if (bmiCat === 'uw') tier = 'balanced';
  else if (activity === 'active' && (bucket === 'high' || bucket === 'vhigh')) tier = 'indulgent';
  else tier = 'balanced';
  
  if (bucket === 'low') tier = 'clean';
  
  const key = `${bucket}-${tier}`;
  return mealPlans[key] ? key : `${bucket}-balanced`;
}
