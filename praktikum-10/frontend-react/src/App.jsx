import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import { useAuth } from "./context/AuthContext";

export default function App() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route
        path="/users"
        element={token ? <Users /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
