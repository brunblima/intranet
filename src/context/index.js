import React, { createContext, useContext, useEffect, useState } from "react";
import {
  authfb,
  db,
  signInWithEmailAndPassword,
} from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updatePassword } from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [checkFirstAccess, setCheckFirstAccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = authfb.onAuthStateChanged(async (authenticatedUser) => {
      if (authenticatedUser) {
        const userRef = doc(db, "users", authenticatedUser.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists() && userDoc.data().firstLogin) {
          setShowChangePasswordModal(true);
          setCheckFirstAccess(authenticatedUser);
        } else {
          setShowChangePasswordModal(false);
          setUser(authenticatedUser);
          navigate("/inicio");
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email, password) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        authfb,
        email,
        password
      );
      const authenticatedUser = userCredentials.user;

      const userRef = doc(db, "users", authenticatedUser.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists() && userDoc.data().firstLogin) {
        setShowChangePasswordModal(true);
        setCheckFirstAccess(authenticatedUser);
      } else {
        setShowChangePasswordModal(false);
        setUser(authenticatedUser);
        navigate("/inicio");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await authfb.signOut();
      setUser(null);
      setShowChangePasswordModal(false);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error.message);
    }
  };

  const changePassword = async (newPassword) => {
    try {
      if (checkFirstAccess) {
        await updatePassword(checkFirstAccess, newPassword);
        const userRef = doc(db, "users", checkFirstAccess.uid);
        await updateDoc(userRef, { firstLogin: false });
        setShowChangePasswordModal(false);
        setUser(checkFirstAccess);
        navigate("/inicio");
      }
    } catch (error) {
      console.error("Erro ao alterar a senha:", error.message);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        showChangePasswordModal,
        setShowChangePasswordModal,
        changePassword,
      }}
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
