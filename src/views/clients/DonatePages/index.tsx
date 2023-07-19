import DonateComponent from "components/clients/DonateComponents";
import NavbarPage from "components/clients/headerComponents/NavbarPage";
import React from "react";

const DonatePage = () => {
  return (
    <>
      <NavbarPage
        bgImage='images/header-image-about-us.png'
        title='Donate'
        breadcrumb={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "Donate",
            href: undefined,
          },
        ]}
      />
      <DonateComponent
        image='/images/donate.jpg'
        heading='DONATE NOW'
        title="Let's donate to needy people for better lives"
        desc='Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
        Curabitur facilisis ornare velit non. Aliquam metus tortor,
        auctor id gravida, viverra quis sem. Curabitur non nisl nec
        nisi maximus. Aenean convallis porttitor. Aliquam interdum
        at lacus non blandit.'
        donateForm={true}
        OTP={false}
        signIn={false}
        signUp={false}
        reverse={false}
      />
    </>
  );
};

export default DonatePage;
