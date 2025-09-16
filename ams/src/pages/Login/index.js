import { useEffect } from 'react';
import { Form, Formik } from "formik";
import { Button, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import TextInput from '../../common/components/formFields/TextInput';
import languageData from '../../strings/en.json'
import SelectDropDown from '../../common/components/formFields/SelectDropDown';
import { getUserTypes } from './utils';
import { loginSchema } from '../../helpers/validationSchemas';
import { loginRequest } from './slice';
import { Layout1 } from '../../common/components/layouts/Layout1';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loginAPIStatus, formData } = useSelector(state => state?.login)

    useEffect(() => {
        if (loginAPIStatus == 1) {
            navigate('/dashboard')
        }
    }, [loginAPIStatus])

    return (
        <Grid>
            <Layout1 title={languageData.pages.login.header}>
                <Formik
                    autoComplete='off'
                    enableReinitialize
                    validateOnBlur={false}
                    validateOnChange={true}
                    initialValues={{
                        userType: formData.userType,
                        id: formData.id,
                        password: formData.password
                    }}
                    validationSchema={loginSchema()}
                    onSubmit={values => {
                        dispatch(loginRequest(values))
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
                                <Grid item xs={12}>
                                    <SelectDropDown
                                        label={languageData.pages.login.form.userType.label}
                                        errors={errors}
                                        touched={touched}
                                        fieldId="userType"
                                        options={getUserTypes()}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextInput
                                        label={languageData.pages.login.form.id.label}
                                        fieldId={'id'}
                                        errors={errors}
                                        touched={touched}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextInput
                                        label={languageData.pages.login.form.password.label}
                                        fieldId={'password'}
                                        errors={errors}
                                        touched={touched}
                                        type='password'
                                        maxLength={20}
                                    />
                                </Grid>

                                <Grid item xs={12} container alignItems='center' justifyContent='center'>
                                    <Grid item>
                                        <Button onClick={submitForm} variant='contained'>{languageData.common.buttons.login}</Button>
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

export default Login;