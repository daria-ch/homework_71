import {
    ORDERS_ERROR,
    ORDERS_REQUEST,
    GET_ORDERS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    orders: [],
    error: null,
    loading: false,
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case ORDERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            };
        default:
            return state;
    }
};

export default dishesReducer;