import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from '../pages/Login/slice';
import teacherSlice from '../pages/Admin/TeacherManagement/slice';
import studentSlice from '../pages/Admin/StudentManagement/slice';
import subjectSlice from '../pages/Admin/SubjectManagement/slice';
import attendanceSlice from '../pages/Admin/AttendanceManagement/slice';

// Combine all reducers.
const allReducer = combineReducers({
  login: loginSlice,
  teacher: teacherSlice,
  student: studentSlice,
  subject: subjectSlice,
  attendance: attendanceSlice,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === "common/clearStore") state = undefined;

  return allReducer(state, action);
};

export default rootReducer;