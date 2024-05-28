import React, { useState } from "react";
import SearchUsers from "../../Components/SearchUsers";
import UserForm from "../../Components/Forms/UserForm";

const Cadastro = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSearchUsersModalOpen, setIsSearchUsersModalOpen] = useState(false);

  const handleOpenSearchUsersModal = () => {
    setIsSearchUsersModalOpen(true);
  };

  const handleCloseSearchUsersModal = () => {
    setIsSearchUsersModalOpen(false);
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setIsSearchUsersModalOpen(false);
  };

  return (
    <>
      <UserForm
        user={selectedUser}
        onOpenSearchUsersModal={handleOpenSearchUsersModal}
      />
      <SearchUsers
        isOpen={isSearchUsersModalOpen}
        onClose={handleCloseSearchUsersModal}
        onSelectUser={handleSelectUser}
      />
    </>
  );
};

export default Cadastro;
