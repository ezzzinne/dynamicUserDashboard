/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, ReactNode } from "react";
// import { useNavigate } from "react-router-dom";

interface User {
  username: string;
  role: "Admin" | "Editor" | "Viewer" | null;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: "Admin" | "Editor" | "Viewer") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
//   const navigate = useNavigate();

  const login = (username: string, role: "Admin" | "Editor" | "Viewer") => {
    setUser({ username, role });
    // navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    // navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};