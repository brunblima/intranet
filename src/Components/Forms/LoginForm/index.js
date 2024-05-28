import React, { useState } from "react";
import {
  LoginContainer,
  Heading2,
  Form,
  TextBox,
  IconSpan,
  InputField,
  SubmitButton,
} from "./styles";
import Alert from "../../Alert";
import ChangePasswordModal from "../ChangePassword";

import { useAuth } from "../../../context";
import { VscAccount, VscLock } from "react-icons/vsc";

function LoginForm() {
  const { signIn, showChangePasswordModal, changePassword, setShowChangePasswordModal } = useAuth();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, digite seu email e senha.");
      return;
    }

    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      setErrorMessage(
        "Erro ao fazer login. Por favor, verifique suas credenciais e tente novamente."
      );
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword) {
      setErrorMessage("Por favor, digite a nova senha.");
      return;
    }

    try {
      await changePassword(newPassword);
      setNewPassword("");
    } catch (error) {
      console.error("Erro ao alterar a senha:", error.message);
      setErrorMessage("Erro ao alterar a senha. Por favor, tente novamente.");
    }
  };

  const closeModal = () => {
    setNewPassword(""); // Clear new password field
    setErrorMessage(""); // Clear any previous error
    setShowChangePasswordModal(false); // Close the modal
  };

  return (
    <LoginContainer>
      <Heading2>Entrar</Heading2>
      <Form onSubmit={handleSubmit}>
        <TextBox>
          <InputField
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <IconSpan>
            <VscAccount size={24} />
          </IconSpan>
        </TextBox>
        <TextBox>
          <InputField
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <IconSpan>
            <VscLock size={24} />
          </IconSpan>
        </TextBox>
        <SubmitButton type="submit" onClick={handleSubmit}>
          Entrar
        </SubmitButton>
        {/* <ForgotPasswordLink href="https://website.com">
          Esqueceu sua senha?
        </ForgotPasswordLink> */}
      </Form>

      {showChangePasswordModal && (
        <ChangePasswordModal
          newPassword={newPassword}
          setNewPassword={setNewPassword}
          handleChangePassword={handleChangePassword}
          closeModal={closeModal} 
        />
      )}

      {errorMessage && (
        <Alert message={errorMessage} onClose={() => setErrorMessage(null)} />
      )}
    </LoginContainer>
  );
}

export default LoginForm;
