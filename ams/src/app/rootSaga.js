import { all } from "redux-saga/effects";
import loginSaga from "../pages/Login/saga";
import teacherSaga from "../pages/Admin/TeacherManagement/saga";
import studentSaga from "../pages/Admin/StudentManagement/saga";
import subjectSaga from "../pages/Admin/SubjectManagement/saga";
import attendanceSaga from "../pages/Admin/AttendanceManagement/saga";

function* watchAll() {
  yield all([
    loginSaga(),
    teacherSaga(),
    studentSaga(),
    subjectSaga(),
    attendanceSaga()
  ]);
}

export default watchAll;