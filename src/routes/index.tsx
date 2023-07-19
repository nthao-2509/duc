import AdminAccount from "views/admin/AdminAccount";
import Component from "views/admin/Component";
import Home from "views/admin/Home";
import MailBox from "views/admin/MailBox";
import MainDashboard from "views/admin/MainDashboard";
import Schedule from "views/admin/Schedule";
import Table from "views/admin/Table";

export const RoutesAdmin = [
  {
    title: "",
    layout: "/admin",
    views: [
      {
        name: "Main Dashboard",
        path: "dashboard",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <MainDashboard />,
      },
    ],
  },
  {
    title: "Detail",
    layout: "/admin",
    views: [
      {
        name: "Home",
        path: "home",
        icon: <i className='fa-solid fa-plus'></i>,
        component: <Home />,
      },
      {
        name: "Admin account",
        path: "admin-account",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <AdminAccount />,
      },
      {
        name: "Table",
        path: "table",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <Table />,
      },
      {
        name: "Component",
        path: "component",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <Component />,
      },
      {
        name: "Mail Box",
        path: "mail-box",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <MailBox />,
      },
      {
        name: "Schedule",
        path: "schedule",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <Schedule />,
      },
    ],
  },
];
