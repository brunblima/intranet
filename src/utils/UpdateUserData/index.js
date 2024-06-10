import { db, authfb } from "../../config/firebaseConfig";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const updateUserData = async (userData, temporaryPassword) => {
  try {
    // Verifica se o e-mail já está registrado no Firebase Auth
    const methods = await fetchSignInMethodsForEmail(authfb, userData.email);

    if (methods.length > 0) {
      // Usuário já existe no Firebase Auth, pega o UID
      const userCredential = await signInWithEmailAndPassword(
        authfb,
        userData.email,
        temporaryPassword // Supondo que a senha temporária é conhecida aqui para fazer login
      );
      const uid = userCredential.user.uid;

      const userRef = doc(db, "users", uid);
      await updateDoc(userRef, {
        username: userData.username,
        email: userData.email,
        cellphone: userData.cellphone,
        department: userData.department,
        birthday: userData.birthday,
        job: userData.job,
        firstLogin: false,
      });

      return {
        success: true,
        message: "Dados do usuário atualizados com sucesso!",
      };
    } else {
      // Cria o usuário no Firebase Authentication com a senha temporária
      const userCredential = await createUserWithEmailAndPassword(
        authfb,
        userData.email,
        temporaryPassword
      );
      const user = userCredential.user;
      const uid = user.uid;

      // Adiciona os dados do usuário no Firestore
      const userRef = doc(db, "users", uid);
      await setDoc(userRef, {
        username: userData.username,
        email: userData.email,
        cellphone: userData.cellphone,
        department: userData.department,
        birthday: userData.birthday,
        job: userData.job,
        firstLogin: true, // Define como true ao criar o usuário
      });

      return { success: true, message: "Usuário criado com sucesso!" };
    }
  } catch (error) {
    console.error("Erro ao criar ou atualizar usuário:", error);
    return {
      success: false,
      message: `Erro ao criar ou atualizar usuário: ${error.message}`,
    };
  }
};
