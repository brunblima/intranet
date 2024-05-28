import React from "react";
import { Container } from "./styles";
import { Button } from "../Controllers/Button"
import { MdOutlineAddCircleOutline } from "react-icons/md";

const SupportHeader = ({ openModal }) => {
  return (
    <Container>
      <h1>Chamados</h1>
      <Button style={{height: '45px'}} onClick={openModal}>
        <MdOutlineAddCircleOutline size={30} color="#FFFFFF" />
        Novo Chamado
      </Button>
    </Container>
  );
};

export default SupportHeader;
