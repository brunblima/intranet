import React, { useRef } from "react";
import { SubNav } from "./styles";
import NavButton from "../NavButton";

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);

  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <SubNav isOpen={isSubNavOpen(item.name, item.items)}>
      <div ref={navRef}>
        {item?.items.map((subItem) => (
          <NavButton
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
            hasBullet={true}
          />
        ))}
      </div>
    </SubNav>
  );
};

export default SubMenu;
