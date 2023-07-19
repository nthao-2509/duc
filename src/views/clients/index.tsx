import FooterClient from "components/clients/Footer";
import HeaderComponent from "components/clients/headerComponents";
import React from "react";
import { Outlet } from "react-router-dom";

const ClientView = () => {
  return (
    <>
      <Outlet />
      <FooterClient />
    </>
  );
};

export default ClientView;
