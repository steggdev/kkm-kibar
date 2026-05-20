export interface MenuSlot {
  name: string;
  items: string[];
}

export interface SampleMenu {
  kcal: number;
  title: string;
  slots: MenuSlot[];
}

export type SampleMenuKey = '1200' | '1500' | '1800' | '2000';

export const sampleMenus: Record<SampleMenuKey, SampleMenu> = {
  '1200': {
    kcal: 1200,
    title: 'Contoh menu 1200 kalori',
    slots: [
      { name: 'Sarapan', items: [
        '2 keping roti gandum penuh & ¼ sudu mentega kacang',
        '1 gelas susu rendah lemak'
      ]},
      { name: 'Makan tengah hari', items: [
        '2 senduk nasi beras perang',
        '1 mangkuk sederhana sup sayur',
        '1 keping ikan tenggiri masak singgang',
        '1 biji buah limau bersaiz sederhana',
        '1 gelas air kosong'
      ]},
      { name: 'Minum petang', items: [
        '3 keping biskut gandum penuh'
      ]},
      { name: 'Makan malam', items: [
        '2 senduk nasi beras perang',
        '1 senduk kailan tumis',
        '1 mangkuk sederhana tomyam ayam (1 ketul paha ayam tanpa kulit) bersama lobak merah, bunga kobis & tomato',
        '1 potong buah tembikai',
        '1 gelas air kosong'
      ]}
    ]
  },
  '1500': {
    kcal: 1500,
    title: 'Contoh menu 1500 kalori',
    slots: [
      { name: 'Sarapan', items: [
        '2 keping (60g) roti gandum penuh',
        '1 biji telur rebus'
      ]},
      { name: 'Minum pagi', items: [
        '1–2 bekas yogurt tanpa perisa'
      ]},
      { name: 'Makan tengah hari', items: [
        '2 senduk nasi beras perang',
        '1 senduk (60g) bayam tumis bersama tauhu',
        '1 senduk (30g) kacang buncis + terung tumis',
        '1 ekor ikan goreng berlada (80g)',
        '1 biji epal bersaiz sederhana',
        '1 gelas air kosong'
      ]},
      { name: 'Minum petang', items: [
        '1 gelas air soya tanpa gula'
      ]},
      { name: 'Makan malam', items: [
        '2 senduk nasi beras perang',
        '1 senduk (60g) sayur kangkung tumis',
        '1 mangkuk sup ayam (250g) bersama lobak merah',
        '1 potong (159g) buah betik bersaiz sederhana',
        '1 gelas air kosong'
      ]}
    ]
  },
  '1800': {
    kcal: 1800,
    title: 'Contoh menu 1800 kalori',
    slots: [
      { name: 'Sarapan', items: [
        '2 keping (60g) roti gandum penuh',
        '1 keping keju',
        '1 gelas susu'
      ]},
      { name: 'Minum pagi', items: [
        '1–2 bekas yogurt tanpa perisa'
      ]},
      { name: 'Makan tengah hari', items: [
        '2 senduk nasi beras perang',
        '1 senduk (60g) bayam tumis bersama tauhu',
        '1 senduk (30g) kacang buncis + terung tumis',
        '1 ekor ikan goreng berlada (80g)',
        '1 biji epal bersaiz sederhana',
        '1 gelas air kosong'
      ]},
      { name: 'Minum petang', items: [
        '4 keping biskut gandum penuh (20g)',
        '½ cawan kacang kuda rebus (80g)'
      ]},
      { name: 'Makan malam', items: [
        '2 senduk nasi beras perang',
        '1 senduk (60g) sayur kangkung tumis',
        '1 mangkuk (250g) sup ayam bersama lobak merah',
        '½ biji (159g) buah jambu batu bersaiz kecil',
        '1 gelas air kosong'
      ]}
    ]
  },
  '2000': {
    kcal: 2000,
    title: 'Contoh menu 2000 kalori',
    slots: [
      { name: 'Sarapan', items: [
        '2 keping (60g) roti gandum penuh',
        '1 keping keju',
        '1 biji telur dadar',
        '1 gelas susu'
      ]},
      { name: 'Minum pagi', items: [
        '1 bekas yogurt tanpa perisa',
        '1 cawan bijirin sarapan gandum penuh tanpa gula tambahan'
      ]},
      { name: 'Makan tengah hari', items: [
        '2 senduk nasi beras perang',
        '1 senduk (60g) bayam tumis bersama tauhu',
        '1 senduk (30g) kacang buncis + terung tumis',
        '1 ekor ikan goreng berlada (80g)',
        '1 biji epal bersaiz sederhana',
        '1 gelas air kosong'
      ]},
      { name: 'Minum petang', items: [
        '1½ biji (158g) tauhu sumbat',
        '4 keping biskut gandum penuh (20g)'
      ]},
      { name: 'Makan malam', items: [
        '2 senduk nasi beras perang',
        '1 senduk (60g) sayur kangkung tumis',
        '1 mangkuk (250g) stew ayam bersama tauhu dan lobak merah',
        '½ biji (80g) buah mangga bersaiz sederhana',
        '1 gelas air kosong'
      ]}
    ]
  }
};
