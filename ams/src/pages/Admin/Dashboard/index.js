import { Button, Stack } from "@mui/material";
import languageData from "../../../strings/en.json";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetStates as resetStates_teacher } from "../TeacherManagement/slice";
import { resetStates as resetStates_student } from "../StudentManagement/slice";
import { resetStates as resetStates_subject } from "../SubjectManagement/slice";
import { resetStates as resetStates_attendance } from "../AttendanceManagement/slice";
import { useEffect } from "react";

const Dashboard = () => {

    const navigate = useNavigate();

    const { loginData } = useSelector(state => state?.login);

    const studentStrings = languageData?.pages?.studentManagement;
    const teacherStrings = languageData?.pages?.teacherManagement;
    const subjectStrings = languageData?.pages?.subjectManagement;
    const attendanceStrings = languageData?.pages?.attendanceManagement;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetStates_teacher());
        dispatch(resetStates_student());
        dispatch(resetStates_subject());
        dispatch(resetStates_attendance());
    }, [])

    return (
        <Stack mt={100} justifyContent='center' direction='row' alignItems='center' spacing={20} pb={20} sx={{ '& button': { width: '60px' } }}>

            {loginData?.profileDetails?.userType == `0` &&
                <>
                    <Button variant='outlined' onClick={() => navigate('/student_management')}>{studentStrings?.header}</Button>
                    <Button variant='outlined' onClick={() => navigate('/teacher_management')}>{teacherStrings?.header}</Button>
                    <Button variant='outlined' onClick={() => navigate('/subject_management')}>{subjectStrings?.header}</Button>
                </>
            }

            {loginData?.profileDetails?.userType == `1` &&
                <>
                    <Button variant='outlined' onClick={() => navigate('/attendance_management_teacher')}>{attendanceStrings?.header}</Button>
                </>
            }


            {loginData?.profileDetails?.userType == `2` &&
                <>
                    <Button variant='outlined' onClick={() => navigate('/attendance_management_student')}>{attendanceStrings?.header}</Button>
                </>
            }

        </Stack>
    )
}

export default Dashboard;