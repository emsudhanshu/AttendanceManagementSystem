import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import {
  loginRequest,
  loginSuccess,
  loginFailure,

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
  login_mock,
} from './mocks';

// import store from '../../../app/store';
// import { showError } from '../../../common/components/GenericErrorBox/slice';
// import { getIdempotencyId } from '../../../helpers/utils';
// import moment from 'moment';
// import { previousFinancialYear, previousFinancialYearDate } from './utils';

// var idempotencyId = '';

// export const getApiErrorMessage = (errorObject) => {

//   const languageData = store?.getState()?.languageData?.data

//   let errorMsg = '';
//   let eObj = errorObject?.details?.[0]
//   if (eObj?.code) {
//     errorMsg = languageData?.errorMessages?.[eObj?.code]
//     errorMsg = errorMsg ? errorMsg : eObj?.message
//     errorMsg = errorMsg ? errorMsg : languageData?.errorMessages?.['DEFAULT']
//   }
//   else {
//     errorMsg = languageData?.errorMessages?.['DEFAULT']
//   }

//   return {
//     errorMsg,
//     errorCode: eObj?.code
//   };
// };

// const triggerErrorModal = (errorCode, errorMsg,) => {
//   store?.dispatch(resetStates());
//   store?.dispatch(showError({ errorMsg, hideErrorNavigationRoute: "/FifteenGH_InformationDetails" }))
// }

export function* handleLoginRequest(action) {

  try {
    // const response = yield call(apiCall, {apiUrl: FETCH_PROFILE_DETAILS, payload: {}});

    yield delay(1000)
    const response = login_mock;

    yield put(loginSuccess({ profileDetails: response }));
  } catch (errorObject) {
    // const { errorMsg, errorCode } = getApiErrorMessage(errorObject);
    // triggerErrorModal(errorCode, errorMsg)
    yield put(loginFailure(errorObject));
  }
}

const loginSaga = function* () {
  yield takeLatest(loginRequest.type, handleLoginRequest);
};

export default loginSaga;