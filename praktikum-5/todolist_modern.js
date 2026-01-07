// Data Todo List
const tasks = [
  { id: 1, nama: "Belajar JavaScript", selesai: true },
  { id: 2, nama: "Mengerjakan tugas Praktikum", selesai: false },
  { id: 3, nama: "Membaca modul ES6", selesai: true },
  { id: 4, nama: "Upload tugas ke LMS", selesai: false }
];

console.log("=== DAFTAR SEMUA TUGAS ===");

// forEach dengan Arrow Function + Destructuring
tasks.forEach(({ nama, selesai }) => {
  const status = selesai ? "[✓]" : "[x]";
  console.log(`${status} ${nama}`);
});

console.log("\n=== TUGAS SELESAI ===");

// filter → arrow function satu baris (implicit return)
const tugasSelesai = tasks.filter(task => task.selesai);

// map → arrow function satu baris (implicit return)
const namaTugasSelesai = tugasSelesai.map(task => task.nama);

// forEach arrow function
namaTugasSelesai.forEach(nama => {
  console.log(`✓ ${nama}`);
});

console.log("\n=== JUMLAH TUGAS ===");
console.log(`Total tugas     : ${tasks.length}`);
console.log(`Tugas selesai   : ${tugasSelesai.length}`);
console.log(`Belum selesai   : ${tasks.length - tugasSelesai.length}`);
