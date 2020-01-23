import {
    ADD_TO_MENU,
    DISHES_ERROR,
    DISHES_REQUEST,
    DISHES_SUCCESS,
    INIT_MENU,
    REMOVE_FROM_MENU
} from "../actions/actionTypes";

const initialState = {
    dishes: [],
    menu: [],
    error: null,
    dish: '',
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
        case ADD_TO_MENU:
            return {
                ...state,
            };
        case REMOVE_FROM_MENU:
            if (state.dishes[action.dish] === 0) {
                return state;
            }
            return {};
        case INIT_MENU:
            return {
                ...state,
                menu: state.menu
            };

        default:
            return state;
    }
};

export default dishesReducer;