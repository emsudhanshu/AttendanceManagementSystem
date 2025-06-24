import { subjects_mock } from "../pages/Admin/SubjectManagement/mocks";

(()=>{
    let subjects = JSON.parse(localStorage?.getItem('subjects'));

    if(!(subjects?.length > 0)){
        subjects = subjects_mock;
    }

    localStorage.setItem("subjects", JSON.stringify(subjects));
})()

export const addSubject = (subject) => {
    let subjects = JSON.parse(localStorage?.getItem('subjects'));
    subjects.push(subject);
    localStorage.setItem("subjects", JSON.stringify(subjects));
}

export const getSubjects = () => {
    let subjects = JSON.parse(localStorage?.getItem('subjects'));
    localStorage.setItem("subjects", JSON.stringify(subjects));
    return subjects;
}

export const updateSubject = (subject) => {
    let subjects = JSON.parse(localStorage?.getItem('subjects'));
    let updatedList = []
    subjects?.map(t => {
        if (t?.id == subject?.id) {
            updatedList.push(subject)
        }
        else {
            updatedList.push(t)
        }
    })
    localStorage.setItem("subjects", JSON.stringify(updatedList));
}

export const deleteSubject = (subject) => {
    let subjects = JSON.parse(localStorage?.getItem('subjects'));
    let updatedList = []
    subjects?.map(t => {
        if (t?.id != subject?.id) {
            updatedList.push(t)
        }
    })
    localStorage.setItem("subjects", JSON.stringify(updatedList));
}