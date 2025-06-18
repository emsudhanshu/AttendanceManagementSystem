import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    formData: {},

    addErrorMessage: '',
    addAPIStatus: 0,

    teachers: [],

    getErrorMessage: '',
    getAPIStatus: 0,

    deleteErrorMessage: '',
    deleteAPIStatus: 0,

    updateErrorMessage: '',
    updateAPIStatus: 0
};

const teacherSlice = createSlice({
    name: 'teacher',
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
            return { ...state, teachers: action?.payload, getAPIStatus: 1 };
        },
        getFailure: (state, action) => {
            const error = action.payload?.message;
            return { ...state, teachers: [], getErrorMessage: error, getAPIStatus: 2 };
        },

        deleteRequest: (state, action) => {
            return { ...state, deleteAPIStatus: 0 };
        },
        deleteSuccess: (state, action) => {
            return { ...state, deleteAPIStatus: 1 };
        },
        deleteFailure: (state, action) => {
            const error = action.payload?.message;
            return { ...state, deleteErrorMessage: error, deleteAPIStatus: 2 };
        },

        updateRequest: (state, action) => {
            return { ...state, updateAPIStatus: 0 };
        },
        updateSuccess: (state, action) => {
            return { ...state, updateAPIStatus: 1 };
        },
        updateFailure: (state, action) => {
            const error = action.payload?.message;
            return { ...state, updateErrorMessage: error, updateAPIStatus: 2 };
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
    deleteRequest,
    deleteSuccess,
    deleteFailure,
    updateRequest,
    updateSuccess,
    updateFailure
} = teacherSlice.actions;

export default teacherSlice.reducer;



