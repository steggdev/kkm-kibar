export type Language = 'bm' | 'en';
export type BmiCat = 'uw' | 'normal' | 'ow' | 'ob';
export type QualityTier = 'clean' | 'balanced' | 'indulgent';

export const t = {
  bm: {
    title: 'Kenali <em>keperluan</em><br>tenaga harian anda.',
    sub: 'Kalkulator berasaskan panduan pemakanan KKM — dapatkan sasaran kalori, status BMI, dan pelan pemakanan harian yang disesuaikan dengan profil kesihatan anda.',
    m1: 'Garis Panduan KKM', m2: '± 30 saat', m3: 'Data tidak disimpan',
    metaLabels: ['Berdasarkan', 'Tempoh kiraan', 'Privasi'],
    s1n: 'i.', s2n: 'ii.', s3n: 'iii.',
    personal: 'Maklumat Peribadi', activity: 'Tahap Aktiviti Fizikal', timing: 'Waktu Makan Biasa Anda',
    weight: 'berat badan semasa', height: 'tinggi badan',
    a1: 'Sedentari', a1d: 'Kerja pejabat, duduk banyak',
    a2: 'Sederhana Aktif', a2d: 'Senaman 3–5x seminggu',
    a3: 'Sangat Aktif', a3d: 'Kerja fizikal / latihan berat',
    ltBreakfast: 'sarapan', ltLunch: 'makan tengahari', ltDinner: 'makan malam',
    calcBtn: 'Kira Keputusan',
    dividerMark: 'Keputusan',
    mEyebrow: 'Profil tenaga', mLabel: 'Ringkasan',
    idealw: 'berat ideal', kcal: 'kalori harian', kcalUnit: 'kcal / hari',
    mealEyebrow: 'Cadangan pemakanan', mealplan: 'Pelan makan sehari',
    pdfBtn: 'Muat turun / Cetak',
    disclaimer: 'Maklumat ini adalah panduan sahaja dan tidak menggantikan nasihat klinikal. Sila rujuk pakar pemakanan atau doktor untuk bimbingan lanjut.\n© Kementerian Kesihatan Malaysia',
    alert: 'Sila masukkan berat dan tinggi yang sah.',
    status: { uw: 'Kurang Berat Badan', normal: 'Berat Badan Normal', ow: 'Lebih Berat Badan', ob: 'Obes' },
    statusDesc: {
      uw: 'BMI anda di bawah 18.5. Disyorkan tingkatkan pengambilan kalori secara sihat.',
      normal: 'BMI anda dalam julat sihat (18.5–22.9). Kekalkan gaya hidup aktif dan pemakanan seimbang.',
      ow: 'BMI anda melebihi 23.0. Amalkan diet sihat dan senaman secara berkala.',
      ob: 'BMI anda melebihi 27.5. Sila dapatkan bimbingan daripada pakar pemakanan.'
    },
    statusIcon: { uw: '↓', normal: '✓', ow: '!', ob: '●' },
    qualityTier: {
      clean:     { icon: '◆', title: 'Pelan Pemakanan Bersih', desc: 'Pelan ini mengutamakan makanan rendah lemak tepu, rendah natrium, dan kaya serat bagi menyokong penurunan berat badan secara sihat.' },
      balanced:  { icon: '◈', title: 'Pelan Pemakanan Seimbang', desc: 'Kombinasi makanan rumah yang sihat dengan pilihan kegemaran tempatan — kaya nutrien dan bersesuaian dengan BMI anda.' },
      indulgent: { icon: '✦', title: 'Pelan Seimbang + Nikmati', desc: 'Anda boleh nikmati makanan kegemaran seperti nasi lemak dan roti canai — dengan kawalan bahagian. Badan aktif anda boleh membakarnya, tetapi kekalkan keseimbangan untuk kesihatan jangka panjang.' }
    },
    mealSub: (kcal: string | number) => `Pelan ini direka untuk memenuhi keperluan tenaga harian anda, iaitu lebih kurang ${kcal} kcal sehari, dengan mengambil kira tahap aktiviti dan status BMI anda.`,
    slots: ['Sarapan Pagi', 'Snek Pagi', 'Makan Tengahari', 'Snek Petang', 'Makan Malam']
  },
  en: {
    title: 'Know your <em>daily</em><br>energy needs.',
    sub: 'A calculator based on KKM nutritional guidelines — get your calorie target, BMI status, and a personalised daily meal plan matched to your health profile.',
    m1: 'KKM Guidelines', m2: '± 30 seconds', m3: 'No data stored',
    metaLabels: ['Based on', 'Calculation time', 'Privacy'],
    s1n: 'i.', s2n: 'ii.', s3n: 'iii.',
    personal: 'Personal Information', activity: 'Physical Activity Level', timing: 'Your Usual Meal Times',
    weight: 'current weight', height: 'height',
    a1: 'Sedentary', a1d: 'Office work, mostly sitting',
    a2: 'Moderately Active', a2d: 'Exercise 3–5x per week',
    a3: 'Very Active', a3d: 'Physical work / heavy training',
    ltBreakfast: 'breakfast', ltLunch: 'lunch', ltDinner: 'dinner',
    calcBtn: 'Calculate Results',
    dividerMark: 'Results',
    mEyebrow: 'Energy profile', mLabel: 'Summary',
    idealw: 'ideal weight', kcal: 'daily calories', kcalUnit: 'kcal / day',
    mealEyebrow: 'Meal recommendation', mealplan: 'Your 1-day meal plan',
    pdfBtn: 'Download / Print',
    disclaimer: 'This information is a guide only and does not replace clinical advice. Please consult a nutritionist or doctor for further guidance.\n© Ministry of Health Malaysia',
    alert: 'Please enter a valid weight and height.',
    status: { uw: 'Underweight', normal: 'Normal Weight', ow: 'Overweight', ob: 'Obese' },
    statusDesc: {
      uw: 'Your BMI is below 18.5. It is recommended to increase caloric intake in a healthy way.',
      normal: 'Your BMI is in the healthy range (18.5–22.9). Maintain an active lifestyle and balanced diet.',
      ow: 'Your BMI exceeds 23.0. Practice a healthy diet and regular exercise.',
      ob: 'Your BMI exceeds 27.5. Please seek guidance from a nutritionist.'
    },
    statusIcon: { uw: '↓', normal: '✓', ow: '!', ob: '●' },
    qualityTier: {
      clean:     { icon: '◆', title: 'Clean Eating Plan', desc: 'This plan prioritises low saturated fat, low sodium, and high fibre foods to support healthy weight loss.' },
      balanced:  { icon: '◈', title: 'Balanced Meal Plan', desc: 'A mix of healthy home-cooked meals with local favourites — nutrient-rich and suited to your BMI.' },
      indulgent: { icon: '✦', title: 'Balanced + Enjoy Plan', desc: 'You can enjoy favourites like nasi lemak and roti canai — with portion control. Your active body can burn it off, but keep balance in mind for long-term health.' }
    },
    mealSub: (kcal: string | number) => `This plan is designed to meet your daily energy needs of approximately ${kcal} kcal per day, taking into account your activity level and BMI status.`,
    slots: ['Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Dinner']
  }
};
