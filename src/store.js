import { applyMiddleware } from "redux"; // use configureStore, createStore is deprecated
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension"; // named imports use curly braces
import thunk from 'redux-thunk'; // default imports dont use curly braces
import rootReducer from './reducers'; // common redux pattern is to import from ./reducers and redux looks for default index.js file

const initialState = {};

const middleware = [thunk];

const store = configureStore( // createStore is deprecated
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;