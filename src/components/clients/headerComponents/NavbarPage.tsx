import React from "react";
import NavbarClient from "./Navbar";
import { NavbarPagesStyled } from "../styles/NavbarPages";
import Breadcrumb from "../breadcrumb";

const NavbarPage = (props: {
  bgImage: string;
  title: string;
  breadcrumb: {
    href: string | undefined;
    title: string;
  }[];
}) => {
  return (
    <NavbarPagesStyled bgImage={props.bgImage}>
      <NavbarClient />
      <div className='content'>
        <div className='title'>
          <h1>{props.title}</h1>
        </div>
        <Breadcrumb breadcrumb={props.breadcrumb} />
      </div>
    </NavbarPagesStyled>
  );
};

export default NavbarPage;
