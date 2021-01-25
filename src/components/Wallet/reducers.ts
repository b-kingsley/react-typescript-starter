import {
    FETCH_BALANCE_ERROR,
    FETCH_BALANCE_LOADING,
    FETCH_BALANCE_SUCCESS,
    INCREASE,
    DECREASE
} from "./actionTypes";
import {initialState} from "../../initialState";

export const walletReducer = (state: Wallet = initialState.wallet, action: any) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.name === action.payload) {
                        return {...item, amount: item.amount + 1};
                    }
                    return {...item};
                }),
                status: "success"
            };
        case DECREASE:
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item.name === action.payload) {
                        return {...item, amount: item.amount - 1};
                    }
                    return {...item};
                }),
                status: "success"
            };
        case FETCH_BALANCE_ERROR:
            return {...state, status: "error"};
        case FETCH_BALANCE_LOADING:
            return {...state, status: "loading"};
        case FETCH_BALANCE_SUCCESS:
            return {...state, items: action.payload, status: "success"};
        default:
            return state;
    }
};
