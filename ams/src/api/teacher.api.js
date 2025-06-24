import { teachers_mock } from "../pages/Admin/TeacherManagement/mocks";

(()=>{
    let teachers = JSON.parse(localStorage?.getItem('teachers'));

    if(!(teachers?.length > 0)){
        teachers = teachers_mock;
    }

    localStorage.setItem("teachers", JSON.stringify(teachers));
})()

export const addTeacher = (teacher) => {
    let teachers = JSON.parse(localStorage?.getItem('teachers'));
    teachers.push(teacher);
    localStorage.setItem("teachers", JSON.stringify(teachers));
}

export const getTeachers = () => {
    let teachers = JSON.parse(localStorage?.getItem('teachers'));
    localStorage.setItem("teachers", JSON.stringify(teachers));
    return teachers;
}

export const updateTeacher = (teacher) => {
    let teachers = JSON.parse(localStorage?.getItem('teachers'));
    let updatedList = []
    teachers?.map(t => {
        if (t?.id == teacher?.id) {
            updatedList.push(teacher)
        }
        else {
            updatedList.push(t)
        }
    })
    localStorage.setItem("teachers", JSON.stringify(updatedList));
}

export const deleteTeacher = (teacher) => {
    let teachers = JSON.parse(localStorage?.getItem('teachers'));
    let updatedList = []
    teachers?.map(t => {
        if (t?.id != teacher?.id) {
            updatedList.push(t)
        }
    })
    localStorage.setItem("teachers", JSON.stringify(updatedList));
}