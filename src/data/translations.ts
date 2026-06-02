export type Language = 'bm' | 'en';
export type BmiCat = 'uw' | 'normal' | 'ow' | 'ob';

const hardcodedBM = {
  eyebrow: 'INISIATIF KiBaR (KIRA, BAKAR, REKOD)',
} as const;

export const t = {
  bm: {
    ...hardcodedBM,
    title: 'Berapa keperluan kalori harian anda?',
    sub: 'Ketahui maklumat mengenai keperluan kalori harian, status Indeks Jisim Tubuh (BMI) dan contoh menu yang bersesuaian dengan keperluan kalori harian anda.',
    a1d: 'Anda melakukan aktiviti berintensiti sederhana <150 minit seminggu',
    a2d: 'Anda melakukan aktiviti berintensiti sederhana 150–300 minit seminggu',
    a3d: 'Anda melakukan aktiviti berintensiti sederhana ≥300 minit seminggu',
    activityExamples: 'Contoh aktiviti berintensiti sederhana: Joging, berjalan pantas, senaman aerobik, main badminton.',
    mealplan: 'Contoh menu yang disarankan dalam sehari',
    mealplanNote: 'Nota: Menu ini boleh diubah suai mengikut keperluan tenaga harian anda.',
    mealplanSource: 'Sumber: Panduan Diet Malaysia 2020',
    a1: 'Sedentari', a2: 'Sederhana Aktif', a3: 'Sangat Aktif',
    mealEyebrow: 'Contoh menu', mealNameSuffix: 'kalori',
    m2: '± 30 saat', m3: 'Data tidak disimpan',
    metaLabels: ['Tempoh kiraan', 'Privasi'],
    s1n: 'i.', s2n: 'ii.',
    personal: 'Maklumat peribadi', activity: 'Tahap aktiviti fizikal',
    weight: 'Berat badan semasa', height: 'Tinggi badan',
    calcBtn: 'Kira keputusan',
    dividerMark: 'Keputusan',
    mEyebrow: 'Profil tenaga', mLabel: 'Ringkasan',
    idealw: 'Berat ideal', kcal: 'Kalori harian', kcalUnit: 'kcal / hari',
    idealWeightNote: 'Catatan: Berat badan ideal dikira berdasarkan berat badan anda pada BMI 22 kg/m².',
    pdfBtn: 'Muat turun / cetak',
    disclaimer: 'Maklumat ini adalah panduan sahaja dan tidak menggantikan nasihat klinikal. Sila rujuk <em>Nutritionist</em> atau doktor untuk bimbingan lanjut.\n© Kementerian Kesihatan Malaysia Bahagian Pemakanan',
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
    title: 'How many calories do you need daily?',
    sub: 'Learn about your daily calorie needs, your Body Mass Index (BMI) status, and a sample menu that fits your daily calorie target.',
    a1d: 'You do moderate-intensity activity less than 150 minutes per week',
    a2d: 'You do moderate-intensity activity 150–300 minutes per week',
    a3d: 'You do moderate-intensity activity 300 minutes per week or more',
    activityExamples: 'Examples of moderate-intensity activity: jogging, brisk walking, aerobic exercise, badminton.',
    mealplan: 'Sample menu recommended for the day',
    mealplanNote: 'Note: This menu can be adjusted to suit your daily energy needs.',
    mealplanSource: 'Source: Panduan Diet Malaysia 2020',
    a1: 'Sedentary', a2: 'Moderately Active', a3: 'Very Active',
    mealEyebrow: 'Sample menu', mealNameSuffix: 'calories',
    m2: '± 30 seconds', m3: 'No data stored',
    metaLabels: ['Calculation time', 'Privacy'],
    s1n: 'i.', s2n: 'ii.',
    personal: 'Personal information', activity: 'Physical activity level',
    weight: 'Current weight', height: 'Height',
    calcBtn: 'Calculate results',
    dividerMark: 'Results',
    mEyebrow: 'Energy profile', mLabel: 'Summary',
    idealw: 'Ideal weight', kcal: 'Daily calories', kcalUnit: 'kcal / day',
    idealWeightNote: 'Note: Ideal body weight is calculated based on your weight at BMI 22 kg/m².',
    pdfBtn: 'Download / print',
    disclaimer: 'This information is a guide only and does not replace clinical advice. Please consult a <em>Nutritionist</em> or doctor for further guidance.\n© Ministry of Health Malaysia Nutrition Division',
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
