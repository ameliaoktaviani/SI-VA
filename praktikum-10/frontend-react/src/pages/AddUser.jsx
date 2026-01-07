import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/users", { name, email, password: "123456" });
    navigate("/users");
  };

  return (
    <div className="container mt-4 col-md-4">
      <h3>Tambah User</h3>
      <form onSubmit={submit}>
        <input className="form-control mb-2" placeholder="Nama"
          onChange={e => setName(e.target.value)} />
        <input className="form-control mb-2" placeholder="Email"
          onChange={e => setEmail(e.target.value)} />
        <button className="btn btn-success w-100">Simpan</button>
      </form>
    </div>
  );
}
