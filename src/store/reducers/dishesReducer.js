import {
    DISHES_ERROR,
    DISHES_REQUEST,
    DISHES_SUCCESS, GET_DISHES_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    menu: [],
    error: null,
    loading: false,
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case DISHES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null
            };
        case DISHES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case GET_DISHES_SUCCESS:
            return {
                ...state,
                loading: false,
                menu: action.dishes
            };
        default:
            return state;
    }
};

export default dishesReducer;