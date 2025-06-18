import { Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import useStyles from "./styles";
import RouteWrapper from './RouteWrapper';
import Login from "../pages/Login";
import AdminDashboard from "../pages/Admin/Dashboard";
import AddOrUpdateTeacher from "../pages/Admin/TeacherManagement/AddOrUpdate";
import TeacherManagement from "../pages/Admin/TeacherManagement";
import AddOrUpdateStudent from "../pages/Admin/StudentManagement/AddOrUpdate";
import StudentManagement from "../pages/Admin/StudentManagement";
import AddOrUpdateSubject from "../pages/Admin/SubjectManagement/AddOrUpdate";
import SubjectManagement from "../pages/Admin/SubjectManagement";

function AllRoutes() {

  const classes = useStyles();

  const routeConfig = [
    { component: Login, path: "/" },
    { component: AdminDashboard, path: "/admin_dashboard"},
    { component: AddOrUpdateTeacher, path: "/add_or_update_teacher"},
    { component: TeacherManagement, path: "/teacher_management"},
    { component: AddOrUpdateStudent, path: "/add_or_update_student"},
    { component: StudentManagement, path: "/student_management"},
    { component: AddOrUpdateSubject, path: "/add_or_update_subject"},
    { component: SubjectManagement, path: "/subject_management"}
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