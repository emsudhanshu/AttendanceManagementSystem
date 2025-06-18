import { useEffect } from 'react';
import { Form, Formik } from "formik";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from 'react-router-dom';
import TextInput from '../../../../common/components/formFields/TextInput';
import languageData from '../../../../strings/en.json'
import { teacherSchema } from '../../../../helpers/validationSchemas';
import { Layout1 } from '../../../../common/components/layouts/Layout1';
import { addRequest, updateRequest } from '../slice';
import { uniqueIdGenerator } from '../../../../helpers/utils';
import MultiSelectDropDown from '../../../../common/components/formFields/MultiSelectDropDown';
import { getRequest as getSubjectRequest} from '../../SubjectManagement/slice';

const AddOrUpdateTeacher = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();

    const { formData, addAPIStatus, updateAPIStatus } = useSelector(state => state?.teacher)

    const { subjects } = useSelector(state => state?.subject)

    useEffect(() => {
        if (addAPIStatus == 1 || updateAPIStatus == 1) {
            navigate('/teacher_management')
        }
    }, [addAPIStatus, updateAPIStatus])

    const backHandler = () => {
        navigate('/teacher_management')
    }

    useEffect(() => {
        dispatch(getSubjectRequest());
    }, [])

    return (
        <Grid>
            <Layout1 title={languageData.pages.teacherManagement?.[state?.mode].header}>
                <Formik
                    autoComplete='off'
                    enableReinitialize
                    validateOnBlur={false}
                    validateOnChange={true}
                    initialValues={{
                        id: state?.mode == 'add' ? uniqueIdGenerator() : formData?.id,
                        name: formData?.name,
                        subjects: formData?.subjects,
                        password: formData?.password
                    }}
                    validationSchema={teacherSchema()}
                    onSubmit={values => {
                        if (state?.mode == 'add') {
                            dispatch(addRequest(values))
                        }
                        else if (state?.mode == 'update') {
                            dispatch(updateRequest(values))
                        }
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
                                        label={languageData.pages.teacherManagement.form.id.label}
                                        fieldId={'id'}
                                        errors={errors}
                                        touched={touched}
                                        disabled
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextInput
                                        label={languageData.pages.teacherManagement.form.name.label}
                                        fieldId={'name'}
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <MultiSelectDropDown
                                        fieldId="subjects"
                                        disabled={false}
                                        label={languageData.pages.teacherManagement.form.subjects.label}
                                        options={subjects}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextInput
                                        type='password'
                                        label={languageData.pages.teacherManagement.form.password.label}
                                        fieldId={'password'}
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Grid>

                                <Grid item xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid item>
                                        <Button onClick={submitForm} variant='contained'>{languageData.common.buttons?.[state?.mode]}</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button onClick={backHandler} variant='outlined'>{languageData.common.buttons?.back}</Button>
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

export default AddOrUpdateTeacher;