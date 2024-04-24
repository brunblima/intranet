import React, { useState } from "react";
import {
  LoginContainer,
  Heading2,
  Form,
  TextBox,
  IconSpan,
  InputField,
  SubmitButton,
  ForgotPasswordLink,
} from "./styles";

import { VscAccount, VscLock } from "react-icons/vsc";
import { useAuth } from "../../context";

function LoginForm() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

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

  return (
    <LoginContainer>
      <Heading2>Entrar</Heading2>
      <Form>
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
        <ForgotPasswordLink href="https://website.com">
          Esqueceu sua senha?
        </ForgotPasswordLink>
      </Form>
    </LoginContainer>
  );
}

export default LoginForm;
