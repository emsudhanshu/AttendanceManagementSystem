import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    formData: {},

    addErrorMessage: '',
    addAPIStatus: 0,

    attendances: [],

    getErrorMessage: '',
    getAPIStatus: 0,
};

const attendanceSlice = createSlice({
    name: 'attendance',
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

        addRequest: (state, action) => {
            return { ...state, formData: action?.payload, addAPIStatus: 0 };
        },
        addSuccess: (state, action) => {
            return { ...state, formData: {}, addAPIStatus: 1 };
        },
        addFailure: (state, action) => {
            const error = action.payload?.message;
            return { ...state, formData: {}, addErrorMessage: error, addAPIStatus: 2 };
        },

        getRequest: (state, action) => {
            return { ...state, getAPIStatus: 0 };
        },
        getSuccess: (state, action) => {
            return { ...state, attendances: action?.payload, getAPIStatus: 1 };
        },
        getFailure: (state, action) => {
            const error = action.payload?.message;
            return { ...state, attendances: [], getErrorMessage: error, getAPIStatus: 2 };
        },
        extraReducers: {},
    }
});
export const {
    resetStates,
    setFormData,
    addRequest,
    addSuccess,
    addFailure,
    getRequest,
    getSuccess,
    getFailure,
} = attendanceSlice.actions;

export default attendanceSlice.reducer;