import { combineReducers } from "@reduxjs/toolkit";
import loginSlice from '../pages/Login/slice';

// Combine all reducers.
const allReducer = combineReducers({
  login: loginSlice,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === "common/clearStore") state = undefined;

  return allReducer(state, action);
};

export default rootReducer;