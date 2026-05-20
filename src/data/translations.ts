export type Language = 'bm' | 'en';
export type BmiCat = 'uw' | 'normal' | 'ow' | 'ob';

const hardcodedBM = {
  eyebrow: 'INISIATIF KIBAR (KIRA, BAKAR, REKOD)',
  title: 'Berapa keperluan kalori harian anda?',
  sub: 'Ketahui maklumat mengenai keperluan kalori harian, status Indeks Jisim Tubuh (BMI) dan contoh menu yang bersesuaian dengan keperluan kalori harian anda.',
  a1: 'Sedentari',
  a1d: 'Anda melakukan aktiviti berintensiti sederhana <150 minit seminggu',
  a2: 'Sederhana aktif',
  a2d: 'Anda melakukan aktiviti berintensiti sederhana 150–300 minit seminggu',
  a3: 'Sangat aktif',
  a3d: 'Anda melakukan aktiviti berintensiti sederhana ≥300 minit seminggu',
  activityExamples: 'Contoh aktiviti berintensiti sederhana: Joging, berjalan pantas, senaman aerobik, main badminton.',
  mealplan: 'Contoh menu yang disarankan dalam sehari',
  mealplanNote: 'Nota: Menu ini boleh diubah suai mengikut keperluan tenaga harian anda.',
  mealplanSource: 'Sumber: Panduan Diet Malaysia 2020'
};

export const t = {
  bm: {
    ...hardcodedBM,
    m1: 'Garis panduan KKM', m2: '± 30 saat', m3: 'Data tidak disimpan',
    metaLabels: ['Berdasarkan', 'Tempoh kiraan', 'Privasi'],
    s1n: 'i.', s2n: 'ii.',
    personal: 'Maklumat peribadi', activity: 'Tahap aktiviti fizikal',
    weight: 'Berat badan semasa', height: 'Tinggi badan',
    calcBtn: 'Kira keputusan',
    dividerMark: 'Keputusan',
    mEyebrow: 'Profil tenaga', mLabel: 'Ringkasan',
    idealw: 'Berat ideal', kcal: 'Kalori harian', kcalUnit: 'kcal / hari',
    pdfBtn: 'Muat turun / cetak',
    disclaimer: 'Maklumat ini adalah panduan sahaja dan tidak menggantikan nasihat klinikal. Sila rujuk pakar pemakanan atau doktor untuk bimbingan lanjut.\n© Kementerian Kesihatan Malaysia Bahagian Pemakanan',
    alert: 'Sila masukkan berat dan tinggi yang sah.',
    status: { uw: 'Kurang berat badan', normal: 'Berat badan normal', ow: 'Lebih berat badan', ob: 'Obes' },
    statusDesc: {
      uw: 'BMI anda di bawah 18.5. Disyorkan tingkatkan pengambilan kalori secara sihat.',
      normal: 'BMI anda dalam julat sihat (18.5–22.9). Kekalkan gaya hidup aktif dan pemakanan seimbang.',
      ow: 'BMI anda melebihi 23.0. Amalkan diet sihat dan senaman secara berkala.',
      ob: 'BMI anda melebihi 27.5. Sila dapatkan bimbingan daripada pakar pemakanan.'
    },
    statusIcon: { uw: '↓', normal: '✓', ow: '!', ob: '●' }
  },
  en: {
    ...hardcodedBM,
    m1: 'KKM guidelines', m2: '± 30 seconds', m3: 'No data stored',
    metaLabels: ['Based on', 'Calculation time', 'Privacy'],
    s1n: 'i.', s2n: 'ii.',
    personal: 'Personal information', activity: 'Physical activity level',
    weight: 'Current weight', height: 'Height',
    calcBtn: 'Calculate results',
    dividerMark: 'Results',
    mEyebrow: 'Energy profile', mLabel: 'Summary',
    idealw: 'Ideal weight', kcal: 'Daily calories', kcalUnit: 'kcal / day',
    pdfBtn: 'Download / print',
    disclaimer: 'This information is a guide only and does not replace clinical advice. Please consult a nutritionist or doctor for further guidance.\n© Ministry of Health Malaysia Nutrition Division',
    alert: 'Please enter a valid weight and height.',
    status: { uw: 'Underweight', normal: 'Normal weight', ow: 'Overweight', ob: 'Obese' },
    statusDesc: {
      uw: 'Your BMI is below 18.5. It is recommended to increase caloric intake in a healthy way.',
      normal: 'Your BMI is in the healthy range (18.5–22.9). Maintain an active lifestyle and balanced diet.',
      ow: 'Your BMI exceeds 23.0. Practice a healthy diet and regular exercise.',
      ob: 'Your BMI exceeds 27.5. Please seek guidance from a nutritionist.'
    },
    statusIcon: { uw: '↓', normal: '✓', ow: '!', ob: '●' }
  }
};
