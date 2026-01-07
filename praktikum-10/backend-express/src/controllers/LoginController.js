const prisma = require("../prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Password salah" });

  const token = jwt.sign({ id: user.id }, "SECRET", { expiresIn: "1d" });

  res.json({ token });
};
