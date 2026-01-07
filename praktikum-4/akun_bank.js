// ================================
// akun_bank.js
// ================================

// Membuat object akun
const akun = {
  nomorAkun: 'ACC001',
  namaPemilik: 'Nama Anda', // Ganti dengan nama Anda sendiri
  saldo: 500000, // Saldo awal

  // Method untuk setor uang
  setor: function (jumlah) {
    this.saldo += jumlah;
    console.log(
      `Setoran sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo baru: Rp ${this.saldo.toLocaleString('id-ID')}.`
    );
  },

  // Method untuk tarik uang
  tarik: function (jumlah) {
    if (jumlah > this.saldo) {
      console.log('Saldo tidak mencukupi untuk penarikan.');
    } else {
      this.saldo -= jumlah;
      console.log(
        `Penarikan sebesar Rp ${jumlah.toLocaleString('id-ID')} berhasil. Saldo sisa: Rp ${this.saldo.toLocaleString('id-ID')}.`
      );
    }
  },
};

// ================================
// Demonstrasi penggunaan object
// ================================

console.log('=== Informasi Akun ===');
console.log(`Nomor Akun : ${akun.nomorAkun}`);
console.log(`Nama Pemilik: ${akun.namaPemilik}`);
console.log(`Saldo Awal  : Rp ${akun.saldo.toLocaleString('id-ID')}`);
console.log('');

// Setor uang
akun.setor(50000); // contoh setor Rp 50.000

// Tarik uang dengan nominal valid
akun.tarik(100000); // contoh tarik Rp 100.000

// Tarik uang melebihi saldo
akun.tarik(1000000); // contoh tarik Rp 1.000.000 (lebih besar dari saldo)

// Tampilkan saldo akhir
console.log('');
console.log(`Saldo Akhir: Rp ${akun.saldo.toLocaleString('id-ID')}`);
