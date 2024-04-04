import React from "react";
import { Header } from "./styles";
import { VscMenu } from "react-icons/vsc";

const NavHeader = ({ onClick }) => (
  <Header>
    <button type="button" onClick={onClick}>
      <span><VscMenu size={22}/></span>
    </button>
  </Header>
);

export default NavHeader;