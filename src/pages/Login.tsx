import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState<"Admin" | "Editor" | "Viewer" | "">("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && role) {
      login(username, role as "Admin" | "Editor" | "Viewer");
    }
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <select onChange={(e) => setRole(e.target.value as "Admin" | "Editor" | "Viewer" | "")} required>
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
