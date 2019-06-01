import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import getNewsReducer from '../reducers/getNewsReducer';
// todo: Replace the above with the following:
// import rootReducer from '../reducers';

import saga from '../sagas/saga';

const sagaMiddleware = createSagaMiddleware();

// const middleware = applyMiddleware(thunk, logger);

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewareEnhancer = applyMiddleware(sagaMiddleware);

const composedEnhancers = compose(
    middlewareEnhancer,
    reduxDevTools
);

const store = createStore(
    getNewsReducer, // TODO: NEED TO UPDATE TO rootReducer()
    composedEnhancers
);

sagaMiddleware.run(saga);

export default store;
