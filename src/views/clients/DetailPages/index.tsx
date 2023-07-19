import DetailComponent from "components/clients/DetailComponents";
import NavbarPage from "components/clients/headerComponents/NavbarPage";
import React from "react";

const DetailPages = () => {
  return (
    <>
      <NavbarPage
        bgImage='images/header-image-about-us.png'
        title='Detail Page'
        breadcrumb={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Detail",
            href: undefined,
          },
        ]}
      />
      <DetailComponent />
    </>
  );
};

export default DetailPages;
