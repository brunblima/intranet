import React, { createContext, useContext, useEffect, useState } from "react";
import { authfb, signInWithEmailAndPassword } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = authfb.onAuthStateChanged((authenticatedUser) => {
        setUser(authenticatedUser);
      });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      const authInstance  = authfb;
      const userCredentials = signInWithEmailAndPassword(authInstance, email, password);
      setUser(userCredentials);
     
      navigate('/home');
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      throw error; 
    }
  };

  const signOut = async () => {
    try {
      await authfb.signOut();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
