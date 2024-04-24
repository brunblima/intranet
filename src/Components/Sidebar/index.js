import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavHeader from "../NavHeader";
import NavButton from "../NavButton";
import { Container } from "./styles";
import { VscHome, VscSettingsGear } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import LogoutButton from "../LogoutButton/";

const menuItems = [
  {
    name: "Início",
    icon: <VscHome size={24} />,
    path: "/home",
  },
  {
    name: "Suporte",
    icon: <BiSupport size={24} />,
    path: "/support",
  },
  {
    name: "Settings",
    icon: <VscSettingsGear size={24} />,
    path: "/settings",
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
