import { getStudents } from "./student.api"
import { getTeachers } from "./teacher.api"

export const login = (userInfo) => {

    // userinfo sample format ->{ id: "544", password : "35", userType : "0"}

    if (userInfo?.userType == '0') {
        //admin
        if (userInfo.id == "admin" && userInfo.password == "admin") {
            return {
                id: userInfo.id,
                userType: userInfo.userType,
                subjects: userInfo?.subjects
            }
        }
        else {
            throw 'error'
        }
    }
    else if (userInfo?.userType == '1') {
        //teacher
        const teachers = getTeachers();
        const teacher = teachers.find(t => (t?.id == userInfo?.id && t?.password == userInfo?.password))
        if (teacher) {
            return {
                id: userInfo.id,
                userType: userInfo.userType,
                subjects: teacher?.subjects
            }
        }
        else {
            throw 'error'
        }
    }
    else if (userInfo?.userType == '2') {
        //student
        const students = getStudents();
        const student = students.find(t => (t?.id == userInfo?.id && t?.password == userInfo?.password))
        if (student) {
            return {
                id: userInfo.id,
                userType: userInfo.userType,
                subjects: student?.subjects
            }
        }
        else {
            throw 'error'
        }
    }
    else {
        throw 'error'
    }

}