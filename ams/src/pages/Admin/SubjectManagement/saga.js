import { delay, put, takeLatest } from 'redux-saga/effects';
import {
    addRequest,
    addSuccess,
    addFailure,
    getRequest,
    getSuccess,
    getFailure,
    updateRequest,
    updateSuccess,
    updateFailure,
    deleteRequest,
    deleteSuccess,
    deleteFailure,
} from './slice';

import { addSubject, deleteSubject, getSubjects, updateSubject } from '../../../api/subject.api';

export function* handleAddRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        addSubject(action?.payload)
        yield put(addSuccess());
    } catch (errorObject) {
        alert("Some error occured");
        yield put(addFailure(errorObject));
    }
}

export function* handleGetRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        const subjects = getSubjects();
        yield put(getSuccess(subjects));
    } catch (errorObject) {
        alert("Some error occured");
        yield put(getFailure(errorObject));
    }
}

export function* handleUpdateRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        updateSubject(action?.payload)
        yield put(updateSuccess());
    } catch (errorObject) {
        alert("Some error occured");
        yield put(updateFailure(errorObject));
    }
}

export function* handleDeleteRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        deleteSubject(action?.payload);
        yield put(deleteSuccess());
    } catch (errorObject) {
        alert("Some error occured");
        yield put(deleteFailure(errorObject));
    }
}

const subjectSaga = function* () {
    yield takeLatest(addRequest.type, handleAddRequest);
    yield takeLatest(getRequest.type, handleGetRequest);
    yield takeLatest(deleteRequest.type, handleDeleteRequest);
    yield takeLatest(updateRequest.type, handleUpdateRequest);
};

export default subjectSaga;