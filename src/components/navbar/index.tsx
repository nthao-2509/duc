import React from "react";
import { StyleNavbar } from "./style";

const Navbar = () => {
  return (
    <StyleNavbar>
      <div className='search'>
        <input type='text' placeholder='Search' />
        <i className='fa-solid fa-magnifying-glass'></i>
      </div>
    </StyleNavbar>
  );
};

export default Navbar;
