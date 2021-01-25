import {Action, Dispatch} from "redux";
import {
    DECREASE,
    FETCH_BALANCE_ERROR,
    FETCH_BALANCE_LOADING,
    FETCH_BALANCE_SUCCESS,
    INCREASE
} from "./actionTypes";
import {fetchBalance} from "./services";

export function loadBalances() {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({type: FETCH_BALANCE_LOADING});
        try {
            const data = await fetchBalance();
            dispatch({type: FETCH_BALANCE_SUCCESS, payload: data.wallet});
        } catch (err) {
            dispatch({type: FETCH_BALANCE_ERROR, payload: err});
        }
    };
}

export function increaseBalance(name: string) {
    return (dispatch: Dispatch<Action>) => dispatch({type: INCREASE, payload: name});
}

export function decreaseBalance(name: string) {
    return (dispatch: Dispatch<Action>) => dispatch({type: DECREASE, payload: name});
}
