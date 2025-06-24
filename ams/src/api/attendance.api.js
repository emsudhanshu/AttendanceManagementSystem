import { attendances_mock } from "../pages/Admin/AttendanceManagement/mocks";

(() => {
    let attendances = JSON.parse(localStorage?.getItem('attendances'));

    if (attendances && !(Object.keys?.(attendances)?.length > 0)) {
        attendances = attendances_mock;
    }

    localStorage.setItem("attendances", JSON.stringify(attendances ? attendances : attendances_mock));
})()

export const addAttendance = (attendance) => {
    let attendances = JSON.parse(localStorage?.getItem('attendances'));
    attendances = { ...attendances, ...attendance };
    localStorage.setItem("attendances", JSON.stringify(attendances));
}

export const getAttendances = () => {
    let attendances = JSON.parse(localStorage?.getItem('attendances'));
    localStorage.setItem("attendances", JSON.stringify(attendances));
    return attendances;
}