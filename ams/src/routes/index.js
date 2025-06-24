import { Routes, Route, useNavigate } from "react-router-dom";
import { Button, Grid, Stack } from "@mui/material";
import useStyles from "./styles";
import RouteWrapper from './RouteWrapper';
import Login from "../pages/Login";
import Dashboard from "../pages/Admin/Dashboard";
import AddOrUpdateTeacher from "../pages/Admin/TeacherManagement/AddOrUpdate";
import TeacherManagement from "../pages/Admin/TeacherManagement";
import AddOrUpdateStudent from "../pages/Admin/StudentManagement/AddOrUpdate";
import StudentManagement from "../pages/Admin/StudentManagement";
import AddOrUpdateSubject from "../pages/Admin/SubjectManagement/AddOrUpdate";
import SubjectManagement from "../pages/Admin/SubjectManagement";
import AttendanceManagement_teacher from "../pages/Admin/AttendanceManagement/index_teacher";
import AttendanceManagement_student from "../pages/Admin/AttendanceManagement/index_student";
import { useLocation } from 'react-router-dom';

function AllRoutes() {

  const classes = useStyles();
  const navigate = useNavigate();

  const routeConfig = [
    { component: Login, path: "/" },
    { component: Dashboard, path: "/dashboard" },
    { component: AddOrUpdateTeacher, path: "/add_or_update_teacher" },
    { component: TeacherManagement, path: "/teacher_management" },
    { component: AddOrUpdateStudent, path: "/add_or_update_student" },
    { component: StudentManagement, path: "/student_management" },
    { component: AddOrUpdateSubject, path: "/add_or_update_subject" },
    { component: SubjectManagement, path: "/subject_management" },
    { component: AttendanceManagement_teacher, path: "/attendance_management_teacher" },
    { component: AttendanceManagement_student, path: "/attendance_management_student" }
  ];

  let location = useLocation();

  return (
    <Grid sx={classes?.container}>
      <Grid px={{ xs: 10, sm: 15 }} pt={{ xs: 10, sm: 15 }}>
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

        {!['/','/dashboard']?.includes(location?.pathname) && 
          <Stack py={20} justifyContent="center" alignItems='center'>
            <Button variant="outlined" onClick={()=>navigate('/dashboard')}>Back to Dashboard</Button>
          </Stack>
        }
      </Grid>
    </Grid>
  );
}

export default AllRoutes;