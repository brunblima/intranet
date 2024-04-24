import React, { useRef } from "react";
import { SubNav } from "./styles";
import NavButton from "../NavButton";

const SubMenu = ({ item, activeItem, handleSubMenuClick, isHovered }) => {
  const navRef = useRef(null);

  return (
    <SubNav isOpen={isHovered && activeItem === item.name}>
      <div ref={navRef}>
        {item?.items.map((subItem) => (
          <NavButton
            key={subItem}
            name={subItem}
            isActive={activeItem === subItem}
            hasBullet={true}
            isHovered={isHovered}
            onClick={() => handleSubMenuClick(subItem)} 
          />
        ))}
      </div>
    </SubNav>
  );
};

export default SubMenu;
