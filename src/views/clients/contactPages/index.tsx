import ContactComponent from "components/clients/contactComponent";
import NavbarPage from "components/clients/headerComponents/NavbarPage";
import React from "react";

const ContactPages = () => {
  return (
    <>
      <NavbarPage
        bgImage='images/header-image-about-us.png'
        title='Contact'
        breadcrumb={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Contact",
            href: undefined,
          },
        ]}
      />
      <ContactComponent />
    </>
  );
};

export default ContactPages;
