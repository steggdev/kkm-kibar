export interface MenuSlot {
  name: { bm: string; en: string };
  items: { bm: string[]; en: string[] };
}

export interface SampleMenu {
  kcal: number;
  slots: MenuSlot[];
}

export type SampleMenuKey = '1200' | '1500' | '1800' | '2000';

export const sampleMenus: Record<SampleMenuKey, SampleMenu> = {
  '1200': {
    kcal: 1200,
    slots: [
      { name: { bm: 'Sarapan', en: 'Breakfast' }, items: {
        bm: [
          '2 keping roti gandum penuh & ¼ sudu teh marjerin lembut',
          '1 gelas susu rendah lemak'
        ],
        en: [
          '2 slices wholemeal bread & ¼ tsp soft margarine',
          '1 glass low-fat milk'
        ]
      }},
      { name: { bm: 'Makan Tengah Hari', en: 'Lunch' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 mangkuk sederhana sup sayur',
          '1 keping ikan tenggiri masak singgang',
          '1 biji buah limau bersaiz sederhana',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 medium bowl vegetable soup',
          '1 piece Spanish mackerel cooked singgang-style',
          '1 medium-sized lime',
          '1 glass plain water'
        ]
      }},
      { name: { bm: 'Minum Petang', en: 'Afternoon Snack' }, items: {
        bm: [
          '3 keping biskut gandum penuh'
        ],
        en: [
          '3 wholemeal biscuits'
        ]
      }},
      { name: { bm: 'Makan Malam', en: 'Dinner' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 senduk kailan tumis',
          '1 mangkuk sederhana tomyam ayam (1 ketul paha ayam tanpa kulit) bersama lobak merah, bunga kobis & tomato',
          '1 potong buah tembikai',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 scoop stir-fried kailan (Chinese broccoli)',
          '1 medium bowl chicken tomyam (1 piece chicken thigh, no skin) with carrots, cauliflower & tomato',
          '1 slice watermelon',
          '1 glass plain water'
        ]
      }}
    ]
  },
  '1500': {
    kcal: 1500,
    slots: [
      { name: { bm: 'Sarapan', en: 'Breakfast' }, items: {
        bm: [
          '2 keping (60g) roti gandum penuh',
          '1 gelas susu'
        ],
        en: [
          '2 slices (60g) wholemeal bread',
          '1 glass milk'
        ]
      }},
      { name: { bm: 'Minum Pagi', en: 'Morning Snack' }, items: {
        bm: [
          '1–2 bekas yogurt tanpa perisa'
        ],
        en: [
          '1–2 cups plain yogurt'
        ]
      }},
      { name: { bm: 'Makan Tengah Hari', en: 'Lunch' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 senduk (60g) bayam tumis bersama tauhu',
          '1 senduk (30g) kacang buncis + terung tumis',
          '1 ekor ikan goreng berlada (80g)',
          '1 biji epal bersaiz sederhana',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 scoop (60g) stir-fried spinach with tofu',
          '1 scoop (30g) green beans + brinjal stir-fry',
          '1 piece (80g) fried fish with chilli paste',
          '1 medium-sized apple',
          '1 glass plain water'
        ]
      }},
      { name: { bm: 'Minum Petang', en: 'Afternoon Snack' }, items: {
        bm: [
          '1 gelas air soya tanpa gula'
        ],
        en: [
          '1 glass unsweetened soy milk'
        ]
      }},
      { name: { bm: 'Makan Malam', en: 'Dinner' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 senduk (60g) sayur kangkung tumis',
          '1 mangkuk sup ayam (250g) bersama lobak merah',
          '1 potong (159g) buah betik bersaiz sederhana',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 scoop (60g) stir-fried water spinach (kangkung)',
          '1 bowl (250g) chicken soup with carrots',
          '1 medium-sized slice (159g) papaya',
          '1 glass plain water'
        ]
      }}
    ]
  },
  '1800': {
    kcal: 1800,
    slots: [
      { name: { bm: 'Sarapan', en: 'Breakfast' }, items: {
        bm: [
          '2 keping (60g) roti gandum penuh',
          '1 keping keju',
          '1 gelas susu'
        ],
        en: [
          '2 slices (60g) wholemeal bread',
          '1 slice cheese',
          '1 glass milk'
        ]
      }},
      { name: { bm: 'Minum Pagi', en: 'Morning Snack' }, items: {
        bm: [
          '1–2 bekas yogurt tanpa perisa'
        ],
        en: [
          '1–2 cups plain yogurt'
        ]
      }},
      { name: { bm: 'Makan Tengah Hari', en: 'Lunch' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 senduk (60g) bayam tumis bersama tauhu',
          '1 senduk (30g) kacang buncis + terung tumis',
          '1 ekor ikan goreng berlada (80g)',
          '1 biji epal bersaiz sederhana',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 scoop (60g) stir-fried spinach with tofu',
          '1 scoop (30g) green beans + brinjal stir-fry',
          '1 piece (80g) fried fish with chilli paste',
          '1 medium-sized apple',
          '1 glass plain water'
        ]
      }},
      { name: { bm: 'Minum Petang', en: 'Afternoon Snack' }, items: {
        bm: [
          '4 keping biskut gandum penuh (20g)',
          '½ cawan kacang kuda rebus (80g)'
        ],
        en: [
          '4 wholemeal biscuits (20g)',
          '½ cup boiled chickpeas (80g)'
        ]
      }},
      { name: { bm: 'Makan Malam', en: 'Dinner' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 senduk (60g) sayur kangkung tumis',
          '1 mangkuk (250g) sup ayam bersama lobak merah',
          '½ biji (159g) buah jambu batu bersaiz kecil',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 scoop (60g) stir-fried water spinach (kangkung)',
          '1 bowl (250g) chicken soup with carrots',
          '½ small-sized guava (159g)',
          '1 glass plain water'
        ]
      }}
    ]
  },
  '2000': {
    kcal: 2000,
    slots: [
      { name: { bm: 'Sarapan', en: 'Breakfast' }, items: {
        bm: [
          '2 keping (60g) roti gandum penuh',
          '1 keping keju',
          '1 biji telur dadar',
          '1 gelas susu'
        ],
        en: [
          '2 slices (60g) wholemeal bread',
          '1 slice cheese',
          '1 omelette',
          '1 glass milk'
        ]
      }},
      { name: { bm: 'Minum Pagi', en: 'Morning Snack' }, items: {
        bm: [
          '1 bekas yogurt tanpa perisa',
          '1 cawan bijirin sarapan gandum penuh tanpa gula tambahan'
        ],
        en: [
          '1 cup plain yogurt',
          '1 cup wholemeal breakfast cereal without added sugar'
        ]
      }},
      { name: { bm: 'Makan Tengah Hari', en: 'Lunch' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 senduk (60g) bayam tumis bersama tauhu',
          '1 senduk (30g) kacang buncis + terung tumis',
          '1 ekor ikan goreng berlada (80g)',
          '1 biji epal bersaiz sederhana',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 scoop (60g) stir-fried spinach with tofu',
          '1 scoop (30g) green beans + brinjal stir-fry',
          '1 piece (80g) fried fish with chilli paste',
          '1 medium-sized apple',
          '1 glass plain water'
        ]
      }},
      { name: { bm: 'Minum Petang', en: 'Afternoon Snack' }, items: {
        bm: [
          '1½ biji (158g) tauhu sumbat',
          '4 keping biskut gandum penuh (20g)'
        ],
        en: [
          '1½ pieces (158g) stuffed tofu (tauhu sumbat)',
          '4 wholemeal biscuits (20g)'
        ]
      }},
      { name: { bm: 'Makan Malam', en: 'Dinner' }, items: {
        bm: [
          '2 senduk nasi beras perang',
          '1 senduk (60g) sayur kangkung tumis',
          '1 mangkuk (250g) stew ayam bersama tauhu dan lobak merah',
          '½ biji (80g) buah mangga bersaiz sederhana',
          '1 gelas air kosong'
        ],
        en: [
          '2 scoops brown rice',
          '1 scoop (60g) stir-fried water spinach (kangkung)',
          '1 bowl (250g) chicken and tofu stew with carrots',
          '½ medium-sized mango (80g)',
          '1 glass plain water'
        ]
      }}
    ]
  }
};
