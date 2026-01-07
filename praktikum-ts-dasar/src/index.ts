interface Buku {
  id: number;
  judul: string;
  penulis: string;
  tersedia: boolean;
}

let inventaris: Buku[] = [];

function tambahBuku(buku: Buku) {
  inventaris.push(buku);
  console.log(`Buku "${buku.judul}" telah ditambahkan.`);
}

function tampilkanInventaris(daftar: Buku[]) {
  console.log("\n--- Inventaris Perpustakaan ---");
  daftar.forEach(buku => {
    const status = buku.tersedia ? "Tersedia" : "Dipinjam";
    console.log(`[${buku.id}] ${buku.judul} oleh ${buku.penulis} (${status})`);
  });
}

function cariItem<T, K extends keyof T>(
  items: T[], 
  key: K, 
  value: T[K]
): T | undefined {
  return items.find(item => item[key] === value);
}

const buku1: Buku = { id: 1, judul: "TypeScript in Action", penulis: "Asher Vale", tersedia: true };
const buku2: Buku = { id: 2, judul: "Learning TypeScript", penulis: "Josh Goldberg", tersedia: false };

tambahBuku(buku1);
tambahBuku(buku2);
tampilkanInventaris(inventaris);

console.log("\n--- Hasil Pencarian Generik ---");
const bukuDitemukan = cariItem<Buku, "id">(inventaris, "id", 2);
if (bukuDitemukan) console.log(`Ditemukan buku dengan ID 2: ${bukuDitemukan.judul}`);
