import React from "react";
import { TbLogout2 } from "react-icons/tb";
import { Button } from "./styles";
import { useAuth } from "../../context";

const LogoutButton = ({ isHovered }) => {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut(true);
  };

  return (
    <Button onClick={handleLogout}>
      <div>
        <TbLogout2 size={24} />
      </div>
      {isHovered && <span>Sair</span>}
    </Button>
  );
};

export default LogoutButton;
