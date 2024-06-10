import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavHeader from "../NavHeader";
import NavButton from "../NavButton";
import LogoutButton from "../LogoutButton/";
import { Container } from "./styles";

import { BiSupport } from "react-icons/bi";
import { ImNewspaper } from "react-icons/im";
import { MdOutlinePostAdd } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { VscHome, VscSettingsGear } from "react-icons/vsc";
import { AiOutlineUserAdd } from "react-icons/ai";

const menuItems = [
  {
    name: "Início",
    icon: <VscHome size={24} />,
    path: "/inicio",
  },
  {
    name: "Noticias",
    icon: <ImNewspaper size={24} />,
    path: "/noticias",
    itens: {
      name: "Criar Noticia",
      icon: <MdOutlinePostAdd size={24} />,
      path: "/noticias",
    },
  },
  {
    name: "Suporte",
    icon: <BiSupport size={24} />,
    path: "/suporte",
  },
  {
    name: "Cadastro",
    icon: <AiOutlineUserAdd size={24} />,
    path: "/cadastro",
  },

  {
    name: "Calendario",
    icon: <VscCalendar size={24} />,
    path: "/calendario",
  },
  {
    name: "Ajustes",
    icon: <VscSettingsGear size={24} />,
    path: "/ajustes",
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (!isSidebarFixed) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isSidebarFixed) setIsHovered(false);
  };

  const handleClick = (item) => {
    setActiveItem(item.name);
    navigate(item.path);
  };

  const handleHeaderClick = () => {
    setIsSidebarExpanded((prevIsExpanded) => !prevIsExpanded);
    setIsSidebarFixed((prevIsFixed) => !prevIsFixed);
  };

  return (
    <Container
      isExpanded={isSidebarExpanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavHeader onClick={handleHeaderClick} />
      {menuItems.map((item) => (
        <NavButton
          key={item.name}
          onClick={() => handleClick(item)}
          name={item.name}
          icon={item.icon}
          isActive={activeItem === item.name}
          isHovered={isHovered}
          isSidebarExpanded={isSidebarExpanded}
        />
      ))}
      <LogoutButton
        isHovered={isHovered}
        isSidebarExpanded={isSidebarExpanded}
      />
    </Container>
  );
};

export default Sidebar;
