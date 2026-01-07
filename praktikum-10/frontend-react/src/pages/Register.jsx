import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/register", { name, email, password });
      alert("Register berhasil");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container mt-5 col-md-4">
      <h3 className="text-center">Register</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Nama"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}
