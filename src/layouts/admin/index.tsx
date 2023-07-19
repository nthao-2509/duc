import React from "react";
import { StyleAdmin } from "./style";
import Sidebar from "components/sidebar";
import { TypeRoutes, ViewRoutes } from "types/Types";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Navbar from "components/navbar";
import { RoutesAdmin } from "routes";

const AdminLayout = () => {
  const [open, setOpen] = React.useState(true);
  let location = useLocation();
  const navigate = useNavigate();
  const getRoutes = (routes: TypeRoutes[]) => {
    return routes.map((props: TypeRoutes, key: number) => {
      if (props.layout === "/admin") {
        return (
          <>
            {props.views.map((view: ViewRoutes, key: number) => (
              <Route
                path={`/${view.path}`}
                element={view.component}
                key={key}
              />
            ))}
          </>
        );
      } else {
        return null;
      }
    });
  };
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const getInfoRoute = (routes: TypeRoutes[]) => {
    return routes?.map((route: TypeRoutes, key: number) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <>
            {route.views?.map((view: ViewRoutes, key: number) => {
              if (activeRoute(view.path)) {
                return (
                  <div className='breadcrumb'>
                    <h1
                      style={{
                        textTransform: "capitalize",
                        color: "#000",
                        fontFamily: "Quicksand",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "16px" /* 66.667% */,
                        letterSpacing: "0.12px",
                      }}
                    >
                      {route.layout.split("/")[1]}
                    </h1>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#767676",
                        fontFamily: "Quicksand",
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "16px",
                        letterSpacing: "0.08px",
                      }}
                    >
                      <div>{view.icon}&nbsp; / &nbsp;</div>
                      <div>{view.name}</div>
                    </div>
                  </div>
                );
              } else {
                return <p></p>;
              }
            })}
          </>
        );
      }
    });
  };
  const checkLogin = async () => {
    const dataLocal = await localStorage.getItem("user_login");
    const parseData = dataLocal ? JSON.parse(dataLocal) : undefined;
    if (!parseData) {
      navigate("/auth/sign-in");
    }
  };
  React.useEffect(() => {
    checkLogin();
  }, []);
  return (
    <StyleAdmin>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main>
        <Navbar />
        <div className='content'>
          {getInfoRoute(RoutesAdmin)}
          <Routes>
            {getRoutes(RoutesAdmin)}
            <Route
              path='/'
              element={<Navigate to='/admin/dashboard' replace />}
            />
          </Routes>
        </div>
      </main>
    </StyleAdmin>
  );
};

export default AdminLayout;
