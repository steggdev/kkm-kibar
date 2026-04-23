import type { QualityTier } from './translations';

export type PlanTier = QualityTier;

export interface MealSlot {
  kcal: string;
  items: {
    bm: string[];
    en: string[];
  };
}

export interface MealPlan {
  range: string;
  tier: PlanTier;
  slots: MealSlot[];
}

export const mealPlans: Record<string, MealPlan> = {
  'low-clean': { range: '~1,200–1,399 kcal', tier: 'clean', slots: [
    { kcal: '~300 kcal', items: { bm: ['Oat masak air + susu rendah lemak (1 cawan, kurangkan gula)', 'Telur rebus (1 biji)', 'Teh O tawar atau air kosong'], en: ['Oatmeal with low-fat milk (1 cup, minimal sugar)', 'Boiled egg (1 pc)', 'Plain tea or water'] }},
    { kcal: '~100 kcal', items: { bm: ['Epal atau pear (1 biji, makan dengan kulit)'], en: ['Apple or pear (1 pc, eat with skin)'] }},
    { kcal: '~400 kcal', items: { bm: ['Nasi perang (1 senduk kecil)', 'Ikan kembung masak air asam (1 ekor sederhana)', 'Sayur bayam tumis bawang putih (1 mangkuk)', 'Air kosong'], en: ['Brown rice (1 small scoop)', 'Fish in tamarind broth (1 medium pc)', 'Stir-fried spinach with garlic (1 bowl)', 'Plain water'] }},
    { kcal: '~100 kcal', items: { bm: ['Biskut oat tanpa gula (3–4 keping)', 'Teh hijau tawar'], en: ['Sugar-free oat biscuits (3–4 pcs)', 'Plain green tea'] }},
    { kcal: '~350 kcal', items: { bm: ['Nasi perang (1 senduk kecil)', 'Ayam bakar herba tanpa kulit (1 ketul peha atau dada)', 'Sup sayur campur (1 mangkuk)', 'Air kosong'], en: ['Brown rice (1 small scoop)', 'Grilled herbed chicken, no skin (1 thigh or breast)', 'Mixed vegetable soup (1 bowl)', 'Plain water'] }}
  ]},
  'mid-clean': { range: '~1,400–1,799 kcal', tier: 'clean', slots: [
    { kcal: '~400 kcal', items: { bm: ['Roti wholemeal bakar (2 keping) + telur dadar nipis (1 biji)', 'Teh O tawar atau air kosong'], en: ['Toasted wholemeal bread (2 slices) + thin egg omelette (1 egg)', 'Plain tea or water'] }},
    { kcal: '~150 kcal', items: { bm: ['Pisang atau betik (1 biji / 1 hirisan sederhana)', 'Teh O tawar'], en: ['Banana or papaya (1 pc / 1 medium slice)', 'Plain tea'] }},
    { kcal: '~500 kcal', items: { bm: ['Nasi perang (1 senduk sederhana)', 'Ikan siakap stim dengan halia & daun bawang (1 ketul)', 'Kangkung tumis (1 mangkuk)', 'Sup tauhu (1 mangkuk)'], en: ['Brown rice (1 medium scoop)', 'Steamed sea bass with ginger & spring onion (1 pc)', 'Stir-fried water spinach (1 bowl)', 'Tofu soup (1 bowl)'] }},
    { kcal: '~150 kcal', items: { bm: ['Yogurt rendah lemak (1 cawan kecil)', 'Badam (10 biji)'], en: ['Low-fat yogurt (1 small cup)', 'Almonds (10 pcs)'] }},
    { kcal: '~500 kcal', items: { bm: ['Nasi perang (1 senduk sederhana)', 'Ayam masak merah tanpa kulit (1 ketul)', 'Taugeh tumis (1 mangkuk)', 'Air kosong'], en: ['Brown rice (1 medium scoop)', 'Chicken in spiced tomato sauce, no skin (1 pc)', 'Stir-fried beansprouts (1 bowl)', 'Plain water'] }}
  ]},
  'mid-balanced': { range: '~1,400–1,799 kcal', tier: 'balanced', slots: [
    { kcal: '~400 kcal', items: { bm: ['Nasi lemak separuh — nasi 1 senduk kecil, sambal, timun, telur rebus (tanpa ikan bilis goreng)', 'Teh O ais kurang manis atau air kosong'], en: ['Half-portion nasi lemak — small scoop rice, sambal, cucumber, boiled egg (skip fried anchovies)', 'Iced tea less sugar or plain water'] }},
    { kcal: '~150 kcal', items: { bm: ['Pisang atau betik (1 biji / 1 hirisan sederhana)', 'Teh O tawar'], en: ['Banana or papaya (1 pc / 1 medium slice)', 'Plain tea'] }},
    { kcal: '~500 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk sederhana)', 'Ikan siakap stim dengan halia & daun bawang (1 ketul)', 'Kangkung belacan (1 mangkuk)', 'Sup tauhu (1 mangkuk)'], en: ['White or brown rice (1 medium scoop)', 'Steamed sea bass with ginger & spring onion (1 pc)', 'Kangkung with belacan (1 bowl)', 'Tofu soup (1 bowl)'] }},
    { kcal: '~150 kcal', items: { bm: ['Yogurt rendah lemak (1 cawan kecil)', 'Badam (10 biji)'], en: ['Low-fat yogurt (1 small cup)', 'Almonds (10 pcs)'] }},
    { kcal: '~500 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk sederhana)', 'Ayam masak merah tanpa kulit (1 ketul)', 'Taugeh tumis (1 mangkuk)', 'Air kosong atau teh tawar'], en: ['White or brown rice (1 medium scoop)', 'Chicken in spiced tomato sauce, no skin (1 pc)', 'Stir-fried beansprouts (1 bowl)', 'Plain water or plain tea'] }}
  ]},
  'high-clean': { range: '~1,800–2,199 kcal', tier: 'clean', slots: [
    { kcal: '~500 kcal', items: { bm: ['Roti wholemeal bakar (2 keping) + telur scramble (2 biji)', 'Susu rendah lemak (1 gelas)', 'Buah-buahan tempatan — pisang + oren (1 biji masing-masing)'], en: ['Toasted wholemeal bread (2 slices) + scrambled eggs (2 pcs)', 'Low-fat milk (1 glass)', 'Local fruits — banana + orange (1 each)'] }},
    { kcal: '~200 kcal', items: { bm: ['Yogurt rendah lemak + granola (1 cawan + 2 sudu)', 'Air kosong atau infused water'], en: ['Low-fat yogurt + granola (1 cup + 2 tbsp)', 'Plain or infused water'] }},
    { kcal: '~600 kcal', items: { bm: ['Nasi perang (1 senduk besar)', 'Daging lembu masak kicap halia (3–4 keping nipis — rendah lemak)', 'Sayur campur tumis (1 mangkuk)', 'Ulam raja + sambal belacan (kurangkan belacan)', 'Sup sayur (1 mangkuk)'], en: ['Brown rice (1 large scoop)', 'Lean beef in soy-ginger sauce (3–4 thin slices)', 'Stir-fried mixed vegetables (1 bowl)', 'Fresh ulam raja with light belacan sambal', 'Vegetable soup (1 bowl)'] }},
    { kcal: '~200 kcal', items: { bm: ['Kacang campur panggang tanpa garam (segenggam)', 'Jambu batu atau betik (1 biji / 2 hirisan)'], en: ['Unsalted roasted mixed nuts (1 handful)', 'Guava or papaya (1 pc / 2 slices)'] }},
    { kcal: '~600 kcal', items: { bm: ['Nasi perang (1 senduk besar)', 'Ikan siakap bakar dengan cili + limau (1 ketul)', 'Pucuk paku tumis (1 mangkuk)', 'Sup ayam kampung (1 mangkuk)'], en: ['Brown rice (1 large scoop)', 'Grilled sea bass with chilli & lime (1 pc)', 'Stir-fried jungle fern (1 bowl)', 'Free-range chicken soup (1 bowl)'] }}
  ]},
  'high-balanced': { range: '~1,800–2,199 kcal', tier: 'balanced', slots: [
    { kcal: '~500 kcal', items: { bm: ['Roti canai biasa (1 keping, makan dengan dhal — kurangkan kuah lemak)', 'Telur separuh masak (2 biji)', 'Teh tarik kurang manis (1 cawan)'], en: ['Plain roti canai (1 pc, with dhal — go easy on curry gravy)', 'Half-boiled eggs (2 pcs)', 'Pulled milk tea less sugar (1 cup)'] }},
    { kcal: '~200 kcal', items: { bm: ['Yogurt dengan granola (1 cawan + 2 sudu granola)', 'Air kosong atau infused water'], en: ['Yogurt with granola (1 cup + 2 tbsp granola)', 'Plain or infused water'] }},
    { kcal: '~600 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Daging lembu masak kicap halia (3–4 keping nipis)', 'Terung masak lemak cili api (1 mangkuk kecil — had santan)', 'Ulam raja + sambal belacan', 'Sup sayur (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'Beef in soy-ginger sauce (3–4 thin slices)', 'Eggplant in coconut chilli gravy (1 small bowl — limit coconut)', 'Fresh ulam raja with belacan sambal', 'Vegetable soup (1 bowl)'] }},
    { kcal: '~200 kcal', items: { bm: ['Kacang campur panggang tanpa garam (segenggam)', 'Buah-buahan tempatan — jambu batu atau betik (1 biji / 2 hirisan)'], en: ['Unsalted roasted mixed nuts (1 handful)', 'Local fruit — guava or papaya (1 pc / 2 slices)'] }},
    { kcal: '~600 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Ikan patin masak tempoyak (1 ketul — had kuah)', 'Pucuk paku goreng belacan (1 mangkuk)', 'Sup ayam kampung (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'River fish in fermented durian curry (1 pc — limit gravy)', 'Stir-fried jungle fern with belacan (1 bowl)', 'Free-range chicken soup (1 bowl)'] }}
  ]},
  'high-indulgent': { range: '~1,800–2,199 kcal', tier: 'indulgent', slots: [
    { kcal: '~500 kcal', items: { bm: ['Nasi lemak separuh — nasi 1 senduk, sambal, timun, telur rebus, ikan bilis goreng (had ikan bilis)', 'Teh tarik kurang manis (1 cawan)'], en: ['Half nasi lemak — 1 scoop rice, sambal, cucumber, boiled egg, fried anchovies (go easy on anchovies)', 'Pulled milk tea less sugar (1 cup)'] }},
    { kcal: '~200 kcal', items: { bm: ['Yogurt dengan granola (1 cawan + 2 sudu)', 'Air kosong atau infused water'], en: ['Yogurt with granola (1 cup + 2 tbsp)', 'Plain or infused water'] }},
    { kcal: '~600 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Daging lembu masak kicap halia (3–4 keping nipis)', 'Terung masak lemak cili api (1 mangkuk kecil)', 'Ulam raja + sambal belacan', 'Sup tulang atau sup sayur (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'Beef in soy-ginger sauce (3–4 thin slices)', 'Eggplant in coconut chilli gravy (1 small bowl)', 'Fresh ulam raja with belacan sambal', 'Bone broth or vegetable soup (1 bowl)'] }},
    { kcal: '~200 kcal', items: { bm: ['Kacang campur panggang tanpa garam (segenggam)', 'Buah-buahan tempatan (1 biji / 2 hirisan)'], en: ['Unsalted roasted mixed nuts (1 handful)', 'Local fruit (1 pc / 2 slices)'] }},
    { kcal: '~600 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Ikan patin masak tempoyak (1 ketul — makan dengan nasi, had kuah)', 'Pucuk paku goreng belacan (1 mangkuk)', 'Sup ayam kampung (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'River fish in fermented durian curry (1 pc — limit gravy)', 'Stir-fried jungle fern with belacan (1 bowl)', 'Free-range chicken soup (1 bowl)'] }}
  ]},
  'vhigh-clean': { range: '≥ 2,200 kcal', tier: 'clean', slots: [
    { kcal: '~600 kcal', items: { bm: ['Roti wholemeal bakar (3 keping) + telur scramble (2 biji) + avokado (½ biji)', 'Susu rendah lemak (1 gelas)', 'Pisang + oren (1 biji masing-masing)'], en: ['Toasted wholemeal bread (3 slices) + scrambled eggs (2 pcs) + avocado (½)', 'Low-fat milk (1 glass)', 'Banana + orange (1 each)'] }},
    { kcal: '~250 kcal', items: { bm: ['Smoothie pisang + susu rendah lemak (blend 1 pisang + 200ml susu, tanpa gula tambah)', 'Badam atau walnut (10–12 biji)'], en: ['Banana smoothie with low-fat milk (blend 1 banana + 200ml milk, no added sugar)', 'Almonds or walnuts (10–12 pcs)'] }},
    { kcal: '~700 kcal', items: { bm: ['Nasi perang (1 senduk besar)', 'Ayam bakar rempah tanpa kulit (1 ketul)', 'Sayur campur tumis (1 mangkuk)', 'Telur dadar nipis (1 biji)', 'Ulam timun + sambal belacan (kurangkan belacan)', 'Sup ayam (1 mangkuk)'], en: ['Brown rice (1 large scoop)', 'Spiced grilled chicken, no skin (1 pc)', 'Stir-fried mixed vegetables (1 bowl)', 'Thin egg omelette (1 egg)', 'Fresh cucumber with light belacan sambal', 'Chicken soup (1 bowl)'] }},
    { kcal: '~250 kcal', items: { bm: ['Roti wholemeal bakar (1 keping) + mentega kacang (1 sudu)', 'Teh O tawar atau air kosong'], en: ['Toasted wholemeal bread (1 slice) + peanut butter (1 tbsp)', 'Plain tea or water'] }},
    { kcal: '~700 kcal', items: { bm: ['Nasi perang (1 senduk besar)', 'Ikan siakap bakar dengan cili + limau (1 ekor sederhana)', 'Pucuk paku tumis (1 mangkuk)', 'Ulam timun + daun selom + sambal belacan (kurangkan belacan)', 'Sup tauhu sayur (1 mangkuk)'], en: ['Brown rice (1 large scoop)', 'Grilled sea bass with chilli & lime (1 medium fish)', 'Stir-fried jungle fern (1 bowl)', 'Fresh cucumber & selom herb with light belacan sambal', 'Tofu & vegetable soup (1 bowl)'] }}
  ]},
  'vhigh-balanced': { range: '≥ 2,200 kcal', tier: 'balanced', slots: [
    { kcal: '~600 kcal', items: { bm: ['Roti canai biasa (1 keping) + roti telur (1 keping — pilih salah satu)', 'Telur separuh masak (2 biji)', 'Teh tarik kurang manis (1 cawan)'], en: ['Plain roti canai (1 pc) + egg roti (1 pc — choose one)', 'Half-boiled eggs (2 pcs)', 'Pulled milk tea less sugar (1 cup)'] }},
    { kcal: '~250 kcal', items: { bm: ['Smoothie pisang + susu (1 pisang + 200ml susu rendah lemak, tanpa gula tambah)', 'Badam atau walnut (10–12 biji)'], en: ['Banana milk smoothie (1 banana + 200ml low-fat milk, no added sugar)', 'Almonds or walnuts (10–12 pcs)'] }},
    { kcal: '~700 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Ayam kampung masak lemak cili padi (1 ketul — had santan)', 'Ikan bilis goreng kering (1 sudu makan)', 'Sayur campur tumis (1 mangkuk)', 'Telur dadar nipis (1 biji)', 'Sup ayam (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'Free-range chicken in coconut chilli curry (1 pc — limit coconut milk)', 'Dry-fried anchovies (1 tbsp)', 'Stir-fried mixed vegetables (1 bowl)', 'Thin egg omelette (1 egg)', 'Chicken soup (1 bowl)'] }},
    { kcal: '~250 kcal', items: { bm: ['Roti wholemeal bakar (1 keping) + mentega kacang (1 sudu)', 'Teh O tawar atau Milo O tawar'], en: ['Toasted wholemeal bread (1 slice) + peanut butter (1 tbsp)', 'Plain tea or plain Milo'] }},
    { kcal: '~700 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Ikan siakap bakar dengan cili + limau (1 ekor sederhana)', 'Petai goreng udang kering (1 mangkuk kecil)', 'Ulam timun + daun selom + sambal belacan', 'Sup tauhu sayur (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'Grilled sea bass with chilli & lime (1 medium fish)', 'Stink beans stir-fried with dried shrimp (1 small bowl)', 'Fresh cucumber & selom herb with belacan sambal', 'Tofu & vegetable soup (1 bowl)'] }}
  ]},
  'vhigh-indulgent': { range: '≥ 2,200 kcal', tier: 'indulgent', slots: [
    { kcal: '~600 kcal', items: { bm: ['Nasi lemak ayam rendang separuh — nasi 1 senduk besar, 1 ketul ayam rendang, sambal, telur rebus, kacang', 'Teh tarik kurang manis (1 cawan)'], en: ['Half nasi lemak with chicken rendang — 1 large scoop rice, 1 pc rendang chicken, sambal, boiled egg, peanuts', 'Pulled milk tea less sugar (1 cup)'] }},
    { kcal: '~250 kcal', items: { bm: ['Smoothie pisang + susu (1 pisang + 200ml susu rendah lemak, tanpa gula tambah)', 'Badam atau walnut (10–12 biji)'], en: ['Banana milk smoothie (1 banana + 200ml low-fat milk, no added sugar)', 'Almonds or walnuts (10–12 pcs)'] }},
    { kcal: '~700 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Ayam kampung masak lemak cili padi (1 ketul — had santan)', 'Ikan bilis goreng kering (1 sudu makan)', 'Sayur campur tumis (1 mangkuk)', 'Telur dadar nipis (1 biji)', 'Sup ayam (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'Free-range chicken in coconut chilli curry (1 pc — limit coconut milk)', 'Dry-fried anchovies (1 tbsp)', 'Stir-fried mixed vegetables (1 bowl)', 'Thin egg omelette (1 egg)', 'Chicken soup (1 bowl)'] }},
    { kcal: '~250 kcal', items: { bm: ['Roti wholemeal bakar (1 keping) + mentega kacang (1 sudu)', 'Teh O tawar atau Milo O tawar'], en: ['Toasted wholemeal bread (1 slice) + peanut butter (1 tbsp)', 'Plain tea or plain Milo'] }},
    { kcal: '~700 kcal', items: { bm: ['Nasi putih atau nasi perang (1 senduk besar)', 'Ikan siakap bakar dengan cili + limau (1 ekor sederhana)', 'Petai goreng udang kering (1 mangkuk kecil)', 'Ulam timun + daun selom + sambal belacan', 'Sup tauhu sayur (1 mangkuk)'], en: ['White or brown rice (1 large scoop)', 'Grilled sea bass with chilli & lime (1 medium fish)', 'Stink beans stir-fried with dried shrimp (1 small bowl)', 'Fresh cucumber & selom herb with belacan sambal', 'Tofu & vegetable soup (1 bowl)'] }}
  ]}
};
