import React, { useState } from "react";
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
  isHovered,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <Button type="button" onClick={() => onClick(name)} isActive={isActive}>
      {icon && <span>{icon}</span>}
      {/* {hasBullet && <SpanContainer>&bull; </SpanContainer>} */}

      <SpanContainer
        style={{ opacity: isTransitioning || isHovered ? 1 : 0 }}
        onTransitionEnd={handleTransitionEnd}
      >
        {name}
      </SpanContainer>

      {/* {hasSubNav && isHovered && (
      <Icon isOpen={isOpen} rotateIcon={isOpen}>
        <VscChevronDown />
      </Icon>
    )} */}
    </Button>
  );
};

export default NavButton;
