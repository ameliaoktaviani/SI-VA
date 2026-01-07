// --- INPUT DATA ---
const firstName = "Amelia Oktaviani";
const lastName = "Amel";
const nik = "3204011205990003";
const position = "Backend Developer";
let grossSalary = 9500000;
let isPermanent = true;

// --- VALIDASI NIK ---
console.log("Panjang NIK Valid:", nik.length === 16);

// --- PROSES DATA ---
// 1. Inisial nama
const initialFirstName = firstName.slice(0, 1);
const initialLastName = lastName.slice(0, 1);

// 2. Ambil 4 digit terakhir dari NIK
const lastNikDigits = nik.slice(-4);

// 3. Buat Employee ID
const employeeID = (initialFirstName + initialLastName + lastNikDigits).toUpperCase();

// 4. Format Gaji
const formattedSalary = `Rp ${grossSalary.toLocaleString('id-ID')}`;

// 5. Format Status Karyawan
const statusText = isPermanent ? "Karyawan Tetap" : "Karyawan Kontrak";

// 6. Buat Email Perusahaan
const emailPerusahaan = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@ciptasolusi.digital`;

// --- OUTPUT ---
const summary = `
===================================================
        DATA PENDAFTARAN KARYAWAN BARU
===================================================

SELAMAT DATANG DI PT. CIPTA SOLUSI DIGITAL!

Berikut adalah ringkasan data Anda:

  Nama Lengkap      : ${(firstName + " " + lastName).toUpperCase()}
  Posisi            : ${position}
  Employee ID       : ${employeeID}
  Email Perusahaan  : ${emailPerusahaan}
  
  Gaji Pokok (Gross): ${formattedSalary}
  Status            : ${statusText}

===================================================
`;

console.log(summary);
