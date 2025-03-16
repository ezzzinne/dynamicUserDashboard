import { useAuth } from "../context/AuthContext";
import "../index.css";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="container">
      <h2>Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
};

export default Profile;
  