import NavbarPage from "components/clients/headerComponents/NavbarPage";
import JobComponent from "components/clients/jobComponents";
import PopularComponent from "components/clients/popularComponent";
import React from "react";

const CausesPages = () => {
  return (
    <>
      <NavbarPage
        bgImage='images/header-image-about-us.png'
        title='Causes'
        breadcrumb={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Causes",
            href: undefined,
          },
        ]}
      />
      <JobComponent />
      <PopularComponent />
    </>
  );
};

export default CausesPages;
