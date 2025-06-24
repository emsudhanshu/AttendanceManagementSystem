import { delay, put, takeLatest } from 'redux-saga/effects';
import {
    addRequest,
    addSuccess,
    addFailure,
    getRequest,
    getSuccess,
    getFailure,
} from './slice';
import { addAttendance, getAttendances } from '../../../api/attendance.api';

export function* handleAddRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        addAttendance(action?.payload)
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
        const attendances = getAttendances();
        yield put(getSuccess(attendances));
    } catch (errorObject) {
        alert("Some error occured");
        yield put(getFailure(errorObject));
    }
}

const attendanceSaga = function* () {
    yield takeLatest(addRequest.type, handleAddRequest);
    yield takeLatest(getRequest.type, handleGetRequest);
};

export default attendanceSaga;