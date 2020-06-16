import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import {accountReducer as account} from './AccountReducer.js/Account.reducer';
import logger from "redux-logger";

const middleware = [ThunkMiddleware, logger];
export const store = createStore(account, applyMiddleware(...middleware));