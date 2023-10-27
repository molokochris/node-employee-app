import React, { createContext, useEffect, useState } from "react";
import { auth } from "../api/firebase";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const logoutUser = () => auth.signOut();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const setUserOnChange = async (user: User | null) => {
      if (!user) {
        navigate("/login");
        return;
      }
      setUser(user);
    };
    const cleanup = auth.onAuthStateChanged(setUserOnChange);
    return () => cleanup();
  }, []);

  return user ? (
    <AuthContext.Provider value={[user, setUser, logoutUser]}>
      {children}
    </AuthContext.Provider>
  ) : (
    <h1> Loading...</h1>
  );
};
