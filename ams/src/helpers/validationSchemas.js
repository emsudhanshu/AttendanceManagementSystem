import * as Yup from 'yup';
import languageData from '../strings/en.json'

export const loginSchema = () =>
    Yup.object().shape({
        userType: Yup.string()
            .required(languageData.common.validations.mandatory),
        id: Yup.string()
            .required(languageData.common.validations.mandatory),
        password: Yup.string()
            .required(languageData.common.validations.mandatory),
    });


export const teacherSchema = () =>
    Yup.object().shape({
        id: Yup.string()
            .required(languageData.common.validations.mandatory),
        name: Yup.string()
            .required(languageData.common.validations.mandatory),
        subjects: Yup.array()
            .required(languageData.common.validations.mandatory),
        password: Yup.string()
            .required(languageData.common.validations.mandatory),
    });

export const studentSchema = () =>
    Yup.object().shape({
        id: Yup.string()
            .required(languageData.common.validations.mandatory),
        name: Yup.string()
            .required(languageData.common.validations.mandatory),
        subjects: Yup.array()
            .required(languageData.common.validations.mandatory),
        password: Yup.string()
            .required(languageData.common.validations.mandatory),
    });

export const subjectSchema = () =>
    Yup.object().shape({
        id: Yup.string()
            .required(languageData.common.validations.mandatory),
        name: Yup.string()
            .required(languageData.common.validations.mandatory),
    });

export const attendanceSchema = () =>
    Yup.object().shape({
        subject: Yup.string()
            .required(languageData.common.validations.mandatory),
    });