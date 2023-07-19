import AboutUsHome from "components/clients/aboutUsComponents";
import ClientView from "views/clients";
import AboutPages from "views/clients/AboutPages";
import BlogPages from "views/clients/BlogPages";
import ConfirmDonatePage from "views/clients/ConfirmDonatePage";
import DetailPages from "views/clients/DetailPages";
import DonatePage from "views/clients/DonatePages";
import CausesPages from "views/clients/causePages";
import ContactPages from "views/clients/contactPages";
import HomePageView from "views/clients/homePages";

export const ClientRoutes = [
  {
    name: "home-page",
    path: "",
    icon: undefined,
    layout: "/",
    component: <ClientView />,
    views: [
      {
        name: "home-page",
        path: "",
        icon: undefined,
        layout: "/",
        component: <HomePageView />,
      },
      {
        name: "causes-page",
        path: "/causes",
        icon: undefined,
        layout: "/",
        component: <CausesPages />,
      },
      {
        name: "contact-page",
        path: "/contact",
        icon: undefined,
        layout: "/",
        component: <ContactPages />,
      },
      {
        name: "blog-page",
        path: "/blog",
        icon: undefined,
        layout: "/",
        component: <BlogPages />,
      },
      {
        name: "detail-page",
        path: "/detail",
        icon: undefined,
        layout: "/",
        component: <DetailPages />,
      },
      {
        name: "donate-page",
        path: "/donate",
        icon: undefined,
        layout: "/",
        component: <DonatePage />,
      },
      {
        name: "confirm-donate-page",
        path: "/confirm-donate",
        icon: undefined,
        layout: "/",
        component: <ConfirmDonatePage />,
      },
      {
        name: "about-us-page",
        path: "/about-us",
        icon: undefined,
        layout: "/",
        component: <AboutPages />,
      },
    ],
  },
];
