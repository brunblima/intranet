import React from "react";
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

function LoginForm() {
  return (
    <LoginContainer>
      <Heading2>Entrar</Heading2>
      <Form>
        <TextBox>
          <InputField type="email" placeholder="E-mail" />
          <IconSpan>
            <VscAccount size={24} />
          </IconSpan>
        </TextBox>
        <TextBox>
          <InputField type="password" placeholder="Password" />
          <IconSpan>
            <VscLock size={24} />
          </IconSpan>
        </TextBox>
        <SubmitButton type="submit">Entrar</SubmitButton>
        <ForgotPasswordLink href="https://website.com">
          Esqueceu sua senha?
        </ForgotPasswordLink>
      </Form>
    </LoginContainer>
  );
}

export default LoginForm;
