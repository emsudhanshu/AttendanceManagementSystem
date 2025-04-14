import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import watcherSaga from './rootSaga'
import reducers from './rootReducer'
import logger from 'redux-logger'

// const { REACT_APP_ENVIRONMENT_TYPE } = process.env;

const sagaMiddleware = createSagaMiddleware()

let middlewares = [sagaMiddleware]

// if(["DEV", "UATINTERNAL"]?.includes(REACT_APP_ENVIRONMENT_TYPE)){
  middlewares?.push?.(logger);
// }
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      middlewares,
    ),
})

sagaMiddleware.run(watcherSaga)

export default store