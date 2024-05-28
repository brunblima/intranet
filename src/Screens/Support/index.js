import React, { useState } from "react";
import OrderForm from "../../Components/Forms/OrderForm";
import OrdersTable from "../../Components/OrdersTable";
import SupportHeader from "../../Components/SupportHeader";

function Support() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SupportHeader openModal={openModal} />
      <OrderForm isOpen={isModalOpen} onClose={closeModal} />
      <OrdersTable />
    </>
  );
}

export default Support;
