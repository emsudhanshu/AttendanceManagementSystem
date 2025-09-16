import { Button, Grid, Stack } from "@mui/material"
import { Layout1 } from "../../../common/components/layouts/Layout1"
import languageData from "../../../strings/en.json"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import SelectDropDown from "../../../common/components/formFields/SelectDropDown"
import { Form, Formik } from "formik"
import { attendanceSchema } from "../../../helpers/validationSchemas"
import { getRequest as subjectGetRequest } from "../SubjectManagement/slice"
import { addRequest, getRequest as attendanceGetRequest } from "./slice"
import { getRequest as studentGetRequest } from "../StudentManagement/slice"
import { getFormattedDate } from "../../../helpers/utils"
import ListView from "../../../common/components/ListView"
import { useNavigate } from "react-router-dom"

let updatedAttendanceRecords = {}

const AttendanceManagement = () => {
    
    const [rows, setRows] = useState([]);
    
    const { students_id_name_map } = useSelector(state => state?.student) 
      
    const headings = {
        studentId: {
            label: 'Student ID',
        },
        dateOfAttendance: {
            label: 'Date of Attendance',
        },
        studentName: {
            label: 'Student Name',
        },
        subjectId: {
            label: 'Subject ID',
        },
        attendanceFlag: {
            label: 'Attendance Flag',
        }
    }
    
    const submitAttendance = () => {
        dispatch(addRequest(updatedAttendanceRecords))
    }

    const navigate = useNavigate()

    const dispatch = useDispatch();

    const { formData, attendances, addAPIStatus } = useSelector(state => state?.attendance);

    useEffect(() => {
        if (addAPIStatus == 1) {
            navigate('/dashboard')
        }
    }, [addAPIStatus])

    const { loginData } = useSelector(state => state?.login)

    const { subjects, getAPIStatus: subjectGetAPIStatus } = useSelector(state => state?.subject);

    const [filteredSubjects, setFilteredSubjects] = useState([]);

    useEffect(() => {
        // Convert subject IDs to strings to ensure proper matching
        const teacherSubjectIds = loginData.profileDetails.subjects.map(id => id.toString());
        // Filter only those subjects that match teacher's subjects
        let a = subjects.filter(subject => teacherSubjectIds.includes(subject.id));
        setFilteredSubjects(a)
    }, [subjects])

    const { students, getAPIStatus: studentGetAPIStatus } = useSelector(state => state?.student);

    const commonStrings = languageData?.common?.buttons
    const attendanceStrings = languageData?.pages?.attendanceManagement

    useEffect(() => {
        dispatch(attendanceGetRequest())
        dispatch(studentGetRequest())
        updatedAttendanceRecords = {}
    }, [])

    const ToggleComponent = ({ objectKey, attendanceFlag: flag }) => {
        const [state, setState] = useState(flag);

        const clickHandler = () => {
            const newState = state == 0 ? 1 : 0
            setState(newState);
            let tempObject = {};
            tempObject[objectKey] = newState;
            updatedAttendanceRecords = { ...updatedAttendanceRecords, ...tempObject }
        }

        return (
            <Button onClick={clickHandler} variant={state == 0 ? `outlined` : 'contained'}>
                <span>{`${state == 0 ? `Absent` : 'Present'}`}</span>
            </Button>
        )
    }

    useEffect(() => {
        if (subjectGetAPIStatus == 1 && studentGetAPIStatus == 1) {
            generateSampleRecords(students, formData?.subject)
        }
    }, [
        subjectGetAPIStatus,
        studentGetAPIStatus
    ])

    function generateSampleRecords(students, subjectIdFilter) {
        let attendanceNew = {};
        const currentDate = getFormattedDate();

        students.forEach(student => {
            const subjectIds = student.subjects // Get student's opted subjects
            if (subjectIds.includes(subjectIdFilter)) {      // Only include if student opted this subject
                const key = `${student.id}-${subjectIdFilter}-${currentDate}`;
                if (!Object?.keys?.(attendances)?.includes(key)) {
                    attendanceNew[key] = 0; // Default value

                }
            }
        });

        let existingAttendances = {}

        Object.keys(attendances)?.forEach(a => {
            if (a?.split?.('-')?.[1] == subjectIdFilter) {
                existingAttendances[a] = attendances[a]
            }
        });

        attendanceNew = { ...existingAttendances, ...attendanceNew }

        const rows = transformAttendanceObjectToArray(attendanceNew)



        setRows(rows)

        return attendanceNew;
    }

    const transformAttendanceObjectToArray = (attendanceObject) => {
        const row = [];

        Object.entries(attendanceObject)?.forEach(([key, value]) => {
            const [studentId, subjectId, dateOfAttendance] = key.split('-');

            const attendanceFlag = attendanceObject?.[key];

            row.push({
                studentName: students_id_name_map[studentId],
                studentId,
                subjectId,
                dateOfAttendance,
                attendanceFlag: () => <ToggleComponent attendanceFlag={attendanceFlag} objectKey={key} />
            });
        });

        return row;
    }

    useEffect(() => {
        dispatch(subjectGetRequest());
    }, [])

    return (
        <Grid>
            <Layout1 title={attendanceStrings?.header} buttonHandler={() => { }}>
                <Formik
                    autoComplete='off'
                    enableReinitialize
                    validateOnBlur={false}
                    validateOnChange={true}
                    initialValues={{
                        subject: formData?.subject
                    }}
                    validationSchema={attendanceSchema()}
                    onSubmit={values => {
                        updatedAttendanceRecords = {}
                        generateSampleRecords(students, values?.subject)
                    }}
                >
                    {({
                        errors,
                        touched,
                        setTouched,
                        submitForm,
                    }) => (
                        <Form
                            autoComplete="off"
                            noValidate="noValidate"
                            onChange={() => {
                                setTouched(false);
                            }}
                        >
                            <Grid container direction='column' spacing={20} mb={20}>

                                <Grid item xs={12} >
                                    < SelectDropDown
                                        fieldId="subject"
                                        label={attendanceStrings.form.subject.label}
                                        options={filteredSubjects}
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Grid>
                                <Grid item xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid item>
                                        <Button onClick={submitForm} variant='contained'>{commonStrings?.proceed}</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>

                <ListView
                    headings={headings}
                    rows={rows}
                />

                <Stack py={20} justifyContent="center" alignItems='center'>
                    <Button onClick={submitAttendance} variant='contained'>{'Submit Attendance'}</Button>
                </Stack>
            </Layout1>
        </Grid>
    )
}

export default AttendanceManagement;