import {combineReducers} from "redux";
import {walletReducer} from "./components/Wallet/reducers";

export const rootReducer = combineReducers({wallet: walletReducer});
