import React from "react";
import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import RouteWrapper from './RouteWrapper';
import Login from "../pages/Login";
import AdminDashboard from "../pages/Admin/Dashboard";
import AddTeacher from "../pages/Admin/TeacherManagement/Add";

function AllRoutes() {

//   const location = useLocation();

  const classes = useStyles();

  const routeConfig = [
    { component: Login, path: "/" },
    { component: AdminDashboard, path: "/admin_dashboard"},
    { component: AddTeacher, path: "/add_teacher"}
    
    // { component: HomePage, path: "/" },
    // { component: FifteenGH_UserVerification, path: "/FifteenGH_UserVerification" },
    // { component: FifteenGH_InformationDetails, path: "/FifteenGH_InformationDetails" },
    // { component: FifteenGH_SubmissionFlow, path: "/FifteenGH_SubmissionFlow" }
  ];

  return (
    <Grid sx={classes?.container}>
      <Grid px={{xs:10, sm: 15}} pt={{xs: 10, sm: 15}}>
        <Routes>
          {routeConfig.map((r, i) => {
            return (
              <Route
                key={i}
                path={r.path}
                element={
                  <RouteWrapper path={r.path}>
                    <r.component props={r?.props} />
                  </RouteWrapper>
                }
              />
            );
          })}
        </Routes>
      </Grid>
    </Grid>
  );
}

export default AllRoutes;