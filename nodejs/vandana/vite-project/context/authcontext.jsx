import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, setUser } = useState("");

  useEffect(() => {
    const userLogged = localStorage.getItem("user");
    const userToken = localStorage.getItem("token");

    if (userLogged && userToken) {
      const parsedUser = JSON.parse(userLogged);
      setUser(parsedUser);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password }
      );
      const { token, user } = response.data;
      const UserStorage = JSON.stringify(user);
      localStorage.setItem("user", UserStorage);
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
