import OurTeamComponent from "components/clients/OurTeamComponent";
import AboutUsHome from "components/clients/aboutUsComponents";
import BannerComponent from "components/clients/bannerComponents";
import ContactComponent from "components/clients/contactComponent";
import HeaderComponent from "components/clients/headerComponents";
import JobComponent from "components/clients/jobComponents";
import PopularComponent from "components/clients/popularComponent";
import TestimonialComponent from "components/clients/testimonialComponent";

const HomePageView = () => {
  return (
    <>
      <HeaderComponent />
      <AboutUsHome />
      <JobComponent />
      <BannerComponent />
      <PopularComponent />
      <OurTeamComponent />
      <TestimonialComponent />
      <ContactComponent />
    </>
  );
};

export default HomePageView;
