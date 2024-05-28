import React, { useState, useEffect } from "react";
import {
  ModalOverlay,
  ModalContent,
  Container,
  Table,
  TableHeader,
  TableRowHeader,
  TableHeaderCell,
  TableRow,
  TableCell,
} from "./styles";
import Input from "../Input";
import { Button } from "../Controllers/Button";
import { VscSearch } from "react-icons/vsc";
import { FetchUsers } from "../../utils/FetchUsers";

const SearchUsers = ({ onSelectUser, isOpen, onClose }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const searchUsersByName = async () => {
      if (searchTerm.trim() === "") {
        setUsers([]);
        return;
      }
      const foundUsers = await FetchUsers(searchTerm);
      setUsers(foundUsers);
    };
    searchUsersByName();
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    onSelectUser(user);
    onClose();
  };

  return isOpen ? (
    <ModalOverlay>
      <ModalContent>
        <h2>Buscar Usuário</h2>
        <Container>
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite o nome do usuário"
          />
          <Button onClick={() => setSearchTerm(searchTerm)}>
            <VscSearch size={20} />
          </Button>
        </Container>
        <Table>
          <TableHeader>
            <TableRowHeader>
              <TableHeaderCell>Nome</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
            </TableRowHeader>
          </TableHeader>

          <tbody>
            {users.map((user) => (
              <TableRow key={user.id} onClick={() => handleSelectUser(user)}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
        <Button onClick={onClose}>Fechar</Button>
      </ModalContent>
    </ModalOverlay>
  ) : null;
};

export default SearchUsers;
