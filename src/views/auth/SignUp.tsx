import DonateComponent from "components/clients/DonateComponents";
import FooterClient from "components/clients/Footer";
import NavbarClient from "components/clients/headerComponents/Navbar";
import React from "react";

const SignUp = () => {
  return (
    <>
      <NavbarClient bgColor='#000' margin='unset' />

      <DonateComponent
        image='/images/donate.jpg'
        heading='LOG IN NOW'
        title="Let's donate to needy people for better lives"
        desc='Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non. Aliquam metus tortor, auctor id gravida, viverra quis sem. Curabitur non nisl nec nisi maximus. Aenean convallis porttitor. Aliquam interdum at lacus non blandit.'
        donateForm={false}
        OTP={false}
        signIn={false}
        signUp={true}
        reverse={true}
      />
      <FooterClient />
    </>
  );
};

export default SignUp;
