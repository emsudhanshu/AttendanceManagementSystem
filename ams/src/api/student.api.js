import { students_mock } from "../pages/Admin/StudentManagement/mocks";

(()=>{
    let students = JSON.parse(localStorage?.getItem('students'));

    if(!(students?.length > 0)){
        students = students_mock;
    }

    localStorage.setItem("students", JSON.stringify(students));
})()

export const addStudent = (student) => {
    let students = JSON.parse(localStorage?.getItem('students'));
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
}

export const getStudents = () => {
    let students = JSON.parse(localStorage?.getItem('students'));
    localStorage.setItem("students", JSON.stringify(students));
    return students;
}

export const updateStudent = (student) => {
    let students = JSON.parse(localStorage?.getItem('students'));
    let updatedList = []
    students?.map(t => {
        if (t?.id == student?.id) {
            updatedList.push(student)
        }
        else {
            updatedList.push(t)
        }
    })
    localStorage.setItem("students", JSON.stringify(updatedList));
}

export const deleteStudent = (student) => {
    let students = JSON.parse(localStorage?.getItem('students'));
    let updatedList = []
    students?.map(t => {
        if (t?.id != student?.id) {
            updatedList.push(t)
        }
    })
    localStorage.setItem("students", JSON.stringify(updatedList));
}