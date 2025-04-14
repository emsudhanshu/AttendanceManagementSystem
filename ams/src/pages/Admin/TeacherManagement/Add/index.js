import { useEffect } from 'react';
import { Form, Formik } from "formik";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import TextInput from '../../../../common/components/formFields/TextInput';
import languageData from '../../../../strings/en.json'
import { loginSchema } from '../../../../helpers/validationSchemas';
import { Layout1 } from '../../../../common/components/layouts/Layout1';
// import DatePicker from '../../../../common/components/formFields/DatePicker';

const AddTeacher = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loginAPIStatus, formData } = useSelector(state => state?.login)

    // useEffect(()=>{
    //     if(loginAPIStatus == 1){
    //         navigate('/admin_dashboard')
    //     }
    // },[ loginAPIStatus ])

    return (
        <Grid>
            <Layout1 title={languageData.pages.teacherManagement.add.header}>
                <Formik
                autoComplete='off'
                enableReinitialize
                validateOnBlur={false}
                validateOnChange={true}
                initialValues={{
                    id: formData.id,
                    // dob: formData.dob,
                    name: formData.name,
                }}
                validationSchema={loginSchema()}
                onSubmit={values => {
                    // dispatch(loginRequest(values))
                }}
            >
                {({
                    errors,
                    touched,
                    setTouched,
                    setFieldValue,
                    submitForm,
                    values
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
                                <TextInput
                                    label={languageData.pages.teacherManagement.add.form.name.label}
                                    fieldId={'name'}
                                    errors={errors}
                                    touched={touched}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                {/* <DatePicker
                                    label={languageData.pages.teacherManagement.add.form.dob.label}
                                    errors={errors}
                                    touched={touched}
                                    fieldId={'dob'}
                                    value={values.dob ? values.dob : ''}
                                    onChange={(newValue) => {
                                        const diff = newValue;
                                        if (diff?.length == 10) {
                                            const year = diff.slice(6, 10);
                                            const month = diff.slice(3, 5);
                                            const day = diff.slice(0, 2);
                                            const date = `${month}/${day}/${year}`;
                                            setFieldValue('dateOfBirth', date)
                                        }
                                    }}
                                    maxDate={new Date()}
                                    type={'dob'}
                                    format={'DD/MM/YYYY'}
                                /> */}
                            </Grid>

                            <Grid item xs={12} container alignItems='center' justifyContent='center'>
                                <Grid item>
                                    <Button onClick={submitForm} variant='contained'>{languageData.common.buttons.add}</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                )}
                </Formik>
            </Layout1>
        </Grid>

    )
}

export default AddTeacher;