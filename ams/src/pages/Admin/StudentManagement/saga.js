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
    students_mock,
} from './mocks';

localStorage.setItem('students', JSON.stringify([]));

export function* handleAddRequest(action) {
    try {
        // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
        yield delay(100)
        let students = JSON.parse(localStorage?.getItem('students'));
        students.push(action?.payload);
        localStorage.setItem("students", JSON.stringify(students));
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
        let students = JSON.parse(localStorage?.getItem('students'));
        students = students?.length > 0 ? students : students_mock;
        localStorage.setItem("students", JSON.stringify(students));
        yield put(getSuccess(students));
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
        let students = JSON.parse(localStorage?.getItem('students'));
        let updatedList = []
        students?.map(t => {
            if (t?.id == action?.payload?.id) {
                updatedList.push(action?.payload)
            }
            else{
                updatedList.push(t)
            }
        })
        localStorage.setItem("students", JSON.stringify(updatedList));
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
        let students = JSON.parse(localStorage?.getItem('students'));
        let updatedList = []
        students?.map(t => {
            if (t?.id != action?.payload?.id) {
                updatedList.push(t)
            }
        })
        localStorage.setItem("students", JSON.stringify(updatedList));
        yield put(deleteSuccess());
    } catch (errorObject) {
        console.log(errorObject)
        alert("Some error occured");
        yield put(deleteFailure(errorObject));
    }
}

const studentSaga = function* () {
    yield takeLatest(addRequest.type, handleAddRequest);
    yield takeLatest(getRequest.type, handleGetRequest);
    yield takeLatest(deleteRequest.type, handleDeleteRequest);
    yield takeLatest(updateRequest.type, handleUpdateRequest);
};

export default studentSaga;