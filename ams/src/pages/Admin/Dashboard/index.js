import { Button, Stack } from "@mui/material";
import languageData from "../../../strings/en.json";

const AdminDashboard = () => {

    const studentStrings = languageData?.pages?.studentManagement;
    const teacherStrings = languageData?.pages?.teacherManagement;
    const subjectStrings = languageData?.pages?.subjectManagement;
    
    return (
        <Stack justifyContent='center' alignItems='center' spacing={20} pb={20} sx={{'& button': {width: '40px'}}}>
            <Button variant='outlined'>{studentStrings?.header}</Button>
            <Button variant='outlined'>{teacherStrings?.header}</Button>
            <Button variant='outlined'>{subjectStrings?.header}</Button>
        </Stack>
    )
}

export default AdminDashboard;