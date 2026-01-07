import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/users/${id}`).then(res => {
      setName(res.data.name);
      setEmail(res.data.email);
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/users/${id}`, { name, email });
    navigate("/users");
  };

  return (
    <div className="container mt-4 col-md-4">
      <h3>Edit User</h3>
      <form onSubmit={submit}>
        <input className="form-control mb-2" value={name}
          onChange={e => setName(e.target.value)} />
        <input className="form-control mb-2" value={email}
          onChange={e => setEmail(e.target.value)} />
        <button className="btn btn-primary w-100">Update</button>
      </form>
    </div>
  );
}
