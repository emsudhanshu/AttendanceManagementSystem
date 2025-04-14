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

console.log(loginSchema())