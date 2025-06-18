import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
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
    resetStates
} from './slice';

// import {
//   FETCH_15GH,
//   SUBMIT_15GH,
//   ACKNOWLEDGEMENT_15GH,
//   DOWNLOAD_15GH,
//   DOWNLOAD_15GH_CERT,
//   UPLOAD_15GH_CERT,
//   SEND_OTP_API,
//   VERIFY_OTP_API,
//   FETCH_PROFILE_DETAILS,
//   CUST_RELATIONSHIP_YEAR
// } from "../../../common/constants/ApiEndpoints";
// import { apiCall } from '../../../common/services/apiCall';

import {
    subjects_mock,
} from './mocks';

localStorage.setItem('subjects', JSON.stringify([]));

export function* handleAddRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        let subjects = JSON.parse(localStorage?.getItem('subjects'));
        subjects.push(action?.payload);
        localStorage.setItem("subjects", JSON.stringify(subjects));
        yield put(addSuccess());
    } catch (errorObject) {
        console.log(errorObject)
        alert("Some error occured");
        yield put(addFailure(errorObject));
    }
}

export function* handleGetRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        let subjects = JSON.parse(localStorage?.getItem('subjects'));
        subjects = subjects?.length > 0 ? subjects : subjects_mock;
        localStorage.setItem("subjects", JSON.stringify(subjects));
        yield put(getSuccess(subjects));
    } catch (errorObject) {
        console.log(errorObject)
        alert("Some error occured");
        yield put(getFailure(errorObject));
    }
}

export function* handleUpdateRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        let subjects = JSON.parse(localStorage?.getItem('subjects'));
        let updatedList = []
        subjects?.map(t => {
            if (t?.id == action?.payload?.id) {
                updatedList.push(action?.payload)
            }
            else{
                updatedList.push(t)
            }
        })
        localStorage.setItem("subjects", JSON.stringify(updatedList));
        yield put(updateSuccess());
    } catch (errorObject) {
        console.log(errorObject)
        alert("Some error occured");
        yield put(updateFailure(errorObject));
    }
}

export function* handleDeleteRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        let subjects = JSON.parse(localStorage?.getItem('subjects'));
        let updatedList = []
        subjects?.map(t => {
            if (t?.id != action?.payload?.id) {
                updatedList.push(t)
            }
        })
        localStorage.setItem("subjects", JSON.stringify(updatedList));
        yield put(deleteSuccess());
    } catch (errorObject) {
        console.log(errorObject)
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