// ===============================
// STUDI KASUS 6 - BAGIAN 2
// INVENTORY TOKO ONLINE
// ===============================

// Parent Class
class Product {
  #stock;

  constructor(sku, name, price, initialStock) {
    this.sku = sku;
    this.name = name;
    this.price = price;
    this.#stock = initialStock;
  }

  addStock(quantity) {
    if (quantity <= 0) {
      console.log("Jumlah stok harus positif!");
      return;
    }

    this.#stock += quantity;
    console.log(`Stok ${this.name} bertambah ${quantity}. Total: ${this.#stock}`);
  }

  sell(quantity) {
    if (quantity > this.#stock) {
      console.log(`Stok ${this.name} tidak mencukupi!`);
      return;
    }

    this.#stock -= quantity;
    console.log(`Berhasil menjual ${quantity} ${this.name}. Sisa stok: ${this.#stock}`);
  }

  displayInfo() {
    console.log(`Produk : ${this.name}`);
    console.log(`Harga  : Rp${this.price}`);
    console.log(`Stok   : ${this.#stock}`);
  }
}

// Child Class Book
class Book extends Product {
  constructor(sku, name, price, stock, author) {
    super(sku, name, price, stock);
    this.author = author;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Penulis: ${this.author}`);
  }
}

// Child Class Electronic
class Electronic extends Product {
  constructor(sku, name, price, stock, warrantyMonths) {
    super(sku, name, price, stock);
    this.warrantyMonths = warrantyMonths;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Garansi: ${this.warrantyMonths} bulan`);
  }
}

// ===== DEMONSTRASI =====
console.log("=== DEMO INVENTORY ===");

const buku1 = new Book("BK001", "Belajar JavaScript", 75000, 10, "John Doe");
buku1.displayInfo();
buku1.sell(3);
buku1.addStock(5);

console.log("");

const laptop1 = new Electronic("EL001", "Laptop", 8500000, 5, 24);
laptop1.displayInfo();
laptop1.sell(6);
laptop1.sell(2);
