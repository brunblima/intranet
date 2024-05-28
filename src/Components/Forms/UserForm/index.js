import React, { useState, useEffect } from "react";
import { Input } from "../../Input";
import { Button } from "../../Controllers/Button";
import Alert from "../../Alert";
import {
  Header,
  ContainerButton,
  Container,
  FormContainer,
  Label,
} from "./styles";
import { VscSearch } from "react-icons/vsc";
import { GiCheckMark } from "react-icons/gi";
import { updateUserData } from "../../../utils/UpdateUserData";

const UserForm = ({ user, onOpenSearchUsersModal }) => {
  const [userData, setUserData] = useState({});
  const [temporaryPassword, setTemporaryPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setUserData(user || {});
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async () => {
    if (
      !userData.username ||
      !userData.email ||
      !userData.cellphone ||
      !userData.department ||
      !userData.birthday ||
      !userData.job ||
      !temporaryPassword
    ) {
      setAlertMessage("Por favor, preencha todos os campos.");
      setShowAlert(true);
      return;
    }

    const result = await updateUserData(userData, temporaryPassword);
    setAlertMessage(result.message);
    setShowAlert(true);
  };

  return (
    <>
      <Header>
        <h1>Dados Cadastrais</h1>

        <ContainerButton>
          <Button onClick={onOpenSearchUsersModal}>
            Buscar Usuário
            <VscSearch size={20} />
          </Button>

          <Button onClick={handleSubmit}>
            Salvar <GiCheckMark size={20} />
          </Button>
        </ContainerButton>
      </Header>

      <Container>
        <FormContainer>
          <Label>Nome</Label>
          <Input
            type="text"
            name="username"
            value={userData.username || ""}
            onChange={handleInputChange}
          />
        </FormContainer>

        <FormContainer>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={userData.email || ""}
            onChange={handleInputChange}
          />
        </FormContainer>

        <FormContainer>
          <Label>Celular</Label>
          <Input
            type="text"
            name="cellphone"
            value={userData.cellphone || ""}
            onChange={handleInputChange}
          />
        </FormContainer>

        <FormContainer>
          <Label>Data de Nascimento</Label>
          <Input
            type="date"
            name="birthday"
            value={userData.birthday || ""}
            onChange={handleInputChange}
          />
        </FormContainer>

        <FormContainer>
          <Label>Setor</Label>
          <Input
            type="text"
            name="department"
            value={userData.department || ""}
            onChange={handleInputChange}
          />
        </FormContainer>

        <FormContainer>
          <Label>Cargo</Label>
          <Input
            type="text"
            name="job"
            value={userData.job || ""}
            onChange={handleInputChange}
          />
        </FormContainer>

        <FormContainer>
          <Label>Senha</Label>
          <Input
            type="password"
            name="temporaryPassword"
            value={temporaryPassword}
            onChange={(e) => setTemporaryPassword(e.target.value)}
          />
        </FormContainer>
      </Container>

      {showAlert && (
        <Alert message={alertMessage} onClose={() => setShowAlert(false)} />
      )}
    </>
  );
};

export default UserForm;
