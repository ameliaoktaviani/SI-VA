import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (err) {
      alert(err.response?.data?.message || "Error fetch users");
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      fetchUsers(); // refresh
    } catch (err) {
      alert(err.response?.data?.message || "Error delete user");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h3>Daftar Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteUser(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
