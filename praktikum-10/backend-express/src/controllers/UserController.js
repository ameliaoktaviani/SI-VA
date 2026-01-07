const prisma = require("../prisma");

exports.getUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: { id: true, name: true, email: true }
  });
  res.json(users);
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  await prisma.user.delete({
    where: { id: Number(id) }
  });

  res.json({ message: "User berhasil dihapus" });
};
