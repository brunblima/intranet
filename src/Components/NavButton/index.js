import React from "react";
import { Button, Icon, SpanContainer } from "./styles";
import { VscChevronDown } from "react-icons/vsc";

const NavButton = ({
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
  isOpen,
  hasBullet,
  isHovered
}) => (
  <Button type="button" onClick={() => onClick(name)} isActive={isActive}>
    {icon && <span>{icon}</span>}
    {/* {hasBullet && <SpanContainer>&bull; </SpanContainer>} */}

    { isHovered && <span>{name}</span>}
    
    {/* {hasSubNav && isHovered && (
      <Icon isOpen={isOpen} rotateIcon={isOpen}>
        <VscChevronDown />
      </Icon>
    )} */}
  </Button>
);

export default NavButton;
