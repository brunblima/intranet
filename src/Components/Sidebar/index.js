import React, { useState } from "react";
import NavHeader from "../NavHeader";
import NavButton from "../NavButton";
import SubMenu from "../SubMenu";
import { Container } from "./styles";
import { VscHome, VscSettingsGear, VscChevronDown } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";

const menuItems = [
  {
    name: "Início",
    icon: <VscHome size={24} />,
  },
  {
    name: "Suporte",
    icon: <BiSupport size={24} />,
    items: ["Abrir Chamado", "Visualizar Chamados"],
  },
  {
    name: "Settings",
    icon: <VscSettingsGear size={24} />,
    items: ["Display", "Theme", "Interface"],
  },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false); // Novo estado para rastrear se o sidebar está fixo

  const handleMouseEnter = () => {
    if (!isSidebarFixed) setIsHovered(true); // Verifica se o sidebar não está fixo antes de definir isHovered para true
  };

  const handleMouseLeave = () => {
    if (!isSidebarFixed) setIsHovered(false); // Verifica se o sidebar não está fixo antes de definir isHovered para false
  };

  const handleClick = (item) => {
    setActiveItem((prevActiveItem) => (item !== prevActiveItem ? item : ""));
  };

  const handleHeaderClick = () => {
    setIsSidebarExpanded((prevIsExpanded) => !prevIsExpanded);
    setIsSidebarFixed((prevIsFixed) => !prevIsFixed); // Inverte o estado de fixação do sidebar
  };

  return (
    <Container
      isExpanded={isSidebarExpanded}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <NavHeader onClick={handleHeaderClick} />
      {menuItems.map((item) => (
        <div key={item.name}>
          <NavButton
            onClick={handleClick}
            name={item.name}
            icon={item.icon}
            isActive={activeItem === item.name}
            hasSubNav={!!item.items}
            isOpen={item.isOpen}
            isHovered={isHovered}
            isSidebarExpanded={isSidebarExpanded}
          />
          {item.items && (
            <SubMenu
              activeItem={activeItem}
              handleClick={handleClick}
              item={item}
              isHovered={isHovered}
            />
          )}
        </div>
      ))}
    </Container>
  );
};

export default Sidebar;
