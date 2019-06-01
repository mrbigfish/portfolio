/**
 * 
 *  todo: This is only an example at this point. I need to do 2 things:
 *  todo: 1) Get configureStore() setup for my entire App
 *  todo: 2) Add HMR as such:
 *        * if (process.env.NODE_ENV !== "production") {
 *        *   if (module.hot) {
 *        *     module.hot.accept('./reducers', () => {
 *        *       store.replaceReducer(rootReducer)
 *        *     })
 *        *   }
 *        * }
 * 
 */

import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import monitorReducersEnhancer from './enhancers/monitorReducers';
import loggerMiddleware from './middleware/logger';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}