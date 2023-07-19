import OurTeamComponent from "components/clients/OurTeamComponent";
import AboutUsHome from "components/clients/aboutUsComponents";
import BannerComponent from "components/clients/bannerComponents";
import NavbarPage from "components/clients/headerComponents/NavbarPage";
import TestimonialComponent from "components/clients/testimonialComponent";
import React from "react";

const AboutPages = () => {
  return (
    <>
      <NavbarPage
        bgImage='images/header-image-about-us.png'
        title='About Us'
        breadcrumb={[
          {
            title: "Home",
            href: "/",
          },
          {
            title: "AboutUs",
            href: undefined,
          },
        ]}
      />
      <AboutUsHome />
      <BannerComponent />
      <OurTeamComponent />
      <TestimonialComponent />
    </>
  );
};

export default AboutPages;
