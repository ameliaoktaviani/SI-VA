// dashboard.js

async function getUserDashboard(userId) {
  console.log(`--- MEMUAT DATA USER ID: ${userId} ---`);

  try {
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlPosts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
    const urlTodos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;

    // Ambil data user
    const userResponse = await fetch(urlUser);
    if (!userResponse.ok) throw new Error("Gagal mengambil data user");
    const userData = await userResponse.json();

    // Ambil data posts
    const postsResponse = await fetch(urlPosts);
    if (!postsResponse.ok) throw new Error("Gagal mengambil data posts");
    const postsData = await postsResponse.json();

    // Ambil data todos
    const todosResponse = await fetch(urlTodos);
    if (!todosResponse.ok) throw new Error("Gagal mengambil data todos");
    const todosData = await todosResponse.json();

    const totalPosts = postsData.length;
    const totalTodos = todosData.length;
    const completedTodos = todosData.filter(todo => todo.completed).length;

    console.log("\n=========================================");
    console.log("    DASHBOARD AKTIVITAS PENGGUNA");
    console.log("=========================================");
    console.log(`Nama User    : ${userData.name}`);
    console.log(`Email        : ${userData.email}`);
    console.log(`Total Post   : ${totalPosts} postingan`);
    console.log(`Tugas Selesai: ${completedTodos} / ${totalTodos} tugas`);
    console.log("=========================================");

  } catch (error) {
    console.log("\n[ERROR]");
    console.log(error.message);
  }
}

getUserDashboard(1);
