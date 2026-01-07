const prisma = require("../prisma");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, email, password } = req.body;

    const userExist = await prisma.user.findUnique({
      where: { email }
    });

    if (userExist)
      return res.status(400).json({ message: "Email sudah terdaftar" });

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hash }
    });

    res.json({ message: "Register berhasil", user });
  } catch (err) {
    console.error("🔥 REGISTER ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
