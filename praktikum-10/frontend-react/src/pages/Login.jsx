import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios"; // pastikan file ini ada
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault(); // jangan lupa ini biar ga reload page
    if (!email || !password) {
      alert("Email dan password wajib diisi");
      return;
    }

    try {
      const res = await api.post("/auth/login", { email, password });
      // simpan token di context
      login(res.data.token);
      alert("Login berhasil!");
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login gagal");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}
