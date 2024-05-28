import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  PaginationWrapper,
  PaginationButton,
} from "./styles";
import Loading from "../Animation/Loading";
import { db } from "../../config/firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const ITEMS_PER_PAGE = 10;

const OrdersTable = () => {
  const [openTickets, setOpenTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersCollectionRef = collection(db, "orders");
        const q = query(ordersCollectionRef, orderBy("create_at", "desc"));
        const snapshot = await getDocs(q);
        const ticketsData = snapshot.docs.map(async (doc) => {
          const ticketData = {
            id: doc.id,
            ...doc.data(),
          };
          // Obtenha o nome de usuário do createdBy
          const userName = await getUserName(ticketData.createdBy);
          // Adicione o nome de usuário aos dados do ticket
          ticketData.userName = userName;
          return ticketData;
        });
        // Aguarde a resolução de todas as promessas
        const resolvedTicketsData = await Promise.all(ticketsData);
        setOpenTickets(resolvedTicketsData);
        setLoading(false);
        setTotalPages(Math.ceil(resolvedTicketsData.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching open tickets: ", error);
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const getUserName = async (userId) => {
    const userDoc = await getDocs(collection(db, "users"));
    const user = userDoc.docs.find((doc) => doc.id === userId);
    return user ? user.data().username : "Nome de usuário não encontrado";
  };

  const paginatedTickets = openTickets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const formatDate = (timestamp) => {
    const date = timestamp.toDate();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const translateStatus = (status) => {
    switch (status) {
      case "closed":
        return "Finalizado";
      case "in_progress":
        return "Em Progresso";
      case "open":
        return "Aberto";
      default:
        return status;
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell style={{ width: "1%" }}>ID</TableHeaderCell>
            <TableHeaderCell style={{ width: "5%" }}>Status</TableHeaderCell>
            <TableHeaderCell style={{ width: "10%" }}>
              Aberto em
            </TableHeaderCell>
            <TableHeaderCell style={{ width: "10%" }}>
              Aberto por
            </TableHeaderCell>
            <TableHeaderCell style={{ width: "10%" }}>
              Dispositivo
            </TableHeaderCell>
            <TableHeaderCell style={{ width: "64%" }}>
              Descrição
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        {loading && <Loading size="50px" container />}
        <TableBody>
          {paginatedTickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.ID}</TableCell>
              <TableCell>{translateStatus(ticket.status)}</TableCell>
              <TableCell>{formatDate(ticket.create_at)}</TableCell>
              <TableCell>{ticket.userName}</TableCell>
              <TableCell>{ticket.selectedDevice}</TableCell>
              <TableCell>{ticket.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PaginationWrapper>
        <PaginationButton
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <GrLinkPrevious /> Anterior
        </PaginationButton>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <PaginationButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Próxima <GrLinkNext />
        </PaginationButton>
      </PaginationWrapper>
    </TableContainer>
  );
};

export default OrdersTable;
