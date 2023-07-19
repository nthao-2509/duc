import DonateComponent from "components/clients/DonateComponents";
import NavbarPage from "components/clients/headerComponents/NavbarPage";
import React from "react";

const ConfirmDonatePage = () => {
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
        title='CONFIRM YOUR DONATING'
        desc={undefined}
        donateForm={false}
        OTP={true}
        signUp={false}
        signIn={false}
        reverse={false}
      />
    </>
  );
};

export default ConfirmDonatePage;
