// kasir.js

function hitungTotalPesanan(kodeMenu, jumlah) {
  let hargaSatuan;
  let namaMenu;

  // --- Tentukan harga satuan dan nama menu ---
  switch (kodeMenu.toUpperCase()) {
    case "KOPI":
      hargaSatuan = 25000;
      namaMenu = "Kopi";
      break;
    case "TEH":
      hargaSatuan = 20000;
      namaMenu = "Teh";
      break;
    case "PIZZA":
      hargaSatuan = 55000;
      namaMenu = "Pizza";
      break;
    default:
      hargaSatuan = 0;
      namaMenu = "Menu Tidak Dikenal";
      break;
  }

  // --- Hitung subtotal ---
  const subtotal = hargaSatuan * jumlah;

  // --- Hitung diskon ---
  let diskonPersen = 0;
  if (subtotal > 100000) {
    diskonPersen = 15;
  } else if (subtotal > 50000) {
    diskonPersen = 10;
  }

  const diskon = (diskonPersen / 100) * subtotal;
  const totalBayar = subtotal - diskon;

  // --- Format angka ke Rupiah ---
  const formatRupiah = (angka) => {
    return "Rp " + angka.toLocaleString("id-ID");
  };

  // --- Return struk pembelian ---
  return `
--- Struk Pembelian Kafe Koding ---
Menu Dipesan    : ${namaMenu}
Jumlah          : ${jumlah}
Subtotal        : ${formatRupiah(subtotal)}
Diskon (${diskonPersen}%)    : - ${formatRupiah(diskon)}
-----------------------------------
Total Bayar     : ${formatRupiah(totalBayar)}
--- Terima Kasih ---
  `;
}

// --- Contoh Penggunaan ---
console.log(hitungTotalPesanan("PIZZA", 2));
