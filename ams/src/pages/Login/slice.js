import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    formData: {},
    loginErrorMessage: '',
    loginData: {
    },
    loginAPIStatus: 0,
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resetStates: () => ({
            ...initialState
        }),
        setFormData: (state, action) => {
            return {
                ...initialState,
                formData: action?.payload
            }
        },
        loginRequest: (state, action) => {
            return { ...state, formData: action?.payload, loginData: {}, loginAPIStatus: 0 };
        },
        loginSuccess: (state, action) => {
            const data = action.payload;
            return { ...state, loginData: { profileDetails: data }, loginAPIStatus: 1 };
        },
        loginFailure: (state, action) => {
            const error = action.payload?.message;
            return { ...state, loginErrorMessage: error, loginData: {}, loginAPIStatus: 2 };
        },

        extraReducers: {},
    }
});
export const {
    resetStates,
    setFormData,
    loginRequest,
    loginSuccess,
    loginFailure,
} = loginSlice.actions;

export default loginSlice.reducer;



