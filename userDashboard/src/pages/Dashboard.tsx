import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import "../index.css";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="dashboard">
      <h2>Welcome, {user.username}!</h2>
      <p>You are logged in as: <strong>{user.role}</strong></p>

      {user.role === "Admin" && (
        <div className="dashboard-card admin">
          <h3>Admin Controls</h3>
          <p>Manage users, update settings, and monitor system logs.</p>
        </div>
      )}

      {user.role === "Editor" && (
        <div className="dashboard-card editor">
          <h3>Editor Panel</h3>
          <p>Edit content, approve submissions, and manage articles.</p>
        </div>
      )}

      {user.role === "Viewer" && (
        <div className="dashboard-card viewer">
          <h3>Reports & Analytics</h3>
          <p>View read-only reports and insights.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
