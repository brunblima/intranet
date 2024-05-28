import React, { useState } from "react";
import { Input } from "../../Input";
import { Button } from "../../Controllers/Button";
import {
  ModalOverlay,
  ModalContent,
  Title,
  Container,
  ContainerButton,
} from "./styles";

const ChangePasswordModal = ({
  newPassword,
  setNewPassword,
  handleChangePassword,
  closeModal,
}) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleConfirmChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await handleChangePassword();
      setConfirmPassword("");
      setNewPassword("");
      setError("");
      closeModal();
    } catch (error) {
      setError(`Erro ao atualizar senha: ${error.message}`);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Defina uma Nova Senha</Title>
        {error && <p>{error}</p>}
        <Container>
          <Input
            type="password"
            placeholder="Nova Senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirmar Nova Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Container>
        <ContainerButton>
          <Button onClick={handleConfirmChangePassword}>Alterar Senha</Button>
          <Button onClick={closeModal}>Cancelar</Button>
        </ContainerButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ChangePasswordModal;
