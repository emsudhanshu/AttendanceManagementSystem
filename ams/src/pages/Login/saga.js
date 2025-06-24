import { delay, put, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,
} from './slice';

import { login } from '../../api/login.api';

export function* handleLoginRequest(action) {

  try {
    // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});
    yield delay(100)
    const response = login(action?.payload)
    yield put(loginSuccess(response));
  } catch (errorObject) {
    alert(errorObject);
    yield put(loginFailure(errorObject));
  }
}

const loginSaga = function* () {
  yield takeLatest(loginRequest.type, handleLoginRequest);
};

export default loginSaga;