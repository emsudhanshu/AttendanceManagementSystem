import { Button, Grid } from "@mui/material"
import { Layout1 } from "../../../common/components/layouts/Layout1"
import languageData from "../../../strings/en.json"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import SelectDropDown from "../../../common/components/formFields/SelectDropDown"
import { Form, Formik } from "formik"
import { attendanceSchema } from "../../../helpers/validationSchemas"
import { getRequest as subjectGetRequest } from "../SubjectManagement/slice"
import { getRequest as attendanceGetRequest } from "./slice"
import { getRequest as studentGetRequest } from "../StudentManagement/slice"
import ListView from "../../../common/components/ListView"

const AttendanceManagement = () => {

    const [rows, setRows] = useState([]);

    const headings = {
        studentId: {
            label: 'Student ID',
        },
        dateOfAttendance: {
            label: 'Date of Attendance',
        },
        subjectId: {
            label: 'Subject ID',
        },
        attendanceFlag: {
            label: 'Attendance Flag',
        }
    }

    const ToggleComponent = ({ attendanceFlag: flag }) => {
        return (
            <Button variant={flag == 0 ? `outlined` : 'contained'}>
                <span>{`${flag == 0 ? `Absent` : 'Present'}`}</span>
            </Button>
        )
    }

    const dispatch = useDispatch();

    const { formData, attendances } = useSelector(state => state?.attendance);

    const { loginData } = useSelector(state => state?.login)

    const { subjects } = useSelector(state => state?.subject);

    const [filteredSubjects, setFilteredSubjects] = useState([]);

    useEffect(() => {
        // Convert subject IDs to strings to ensure proper matching
        const teacherSubjectIds = loginData.profileDetails.subjects.map(id => id.toString());
        // Filter only those subjects that match teacher's subjects
        let a = subjects.filter(subject => teacherSubjectIds.includes(subject.id));
        setFilteredSubjects(a)
    }, [subjects])


    const commonStrings = languageData?.common?.buttons
    const attendanceStrings = languageData?.pages?.attendanceManagement

    useEffect(() => {
        dispatch(attendanceGetRequest())
        dispatch(studentGetRequest())
    }, [])

    const generateRecords = (subjectIdFilter) => {

        const studentId = loginData.profileDetails.id;

        let temp = {}

        Object?.keys?.(attendances)?.forEach(a => {
            if (a?.split?.('-')?.[0] == studentId && a?.split?.('-')?.[1] == subjectIdFilter) {
                temp[a] = attendances[a]
            }
        });

        const rows = transformAttendanceObjectToArray(temp)

        setRows(rows)

    }

    const transformAttendanceObjectToArray = (attendanceObject) => {
        const row = [];

        Object.entries(attendanceObject).forEach(([key, value]) => {
            const [studentId, subjectId, dateOfAttendance] = key.split('-');

            const attendanceFlag = attendanceObject?.[key];

            row.push({
                studentId,
                subjectId,
                dateOfAttendance,
                attendanceFlag: () => <ToggleComponent attendanceFlag={attendanceFlag} />

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
                        generateRecords(values?.subject)
                    }}
                >
                    {({
                        errors,
                        touched,
                        values,
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

            </Layout1>
        </Grid>
    )
}

export default AttendanceManagement;