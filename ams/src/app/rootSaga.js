import { all } from "redux-saga/effects";
import loginSaga from "../pages/Login/saga";

function* watchAll() {
  yield all([
    loginSaga(),
  ]);
}

export default watchAll;