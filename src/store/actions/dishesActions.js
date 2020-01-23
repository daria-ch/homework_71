import {
    DISHES_ERROR,
    DISHES_REQUEST,
    DISHES_SUCCESS,
    INIT_MENU,
    GET_DISHES_SUCCESS
} from "./actionTypes";
import axiosOrders from "../../axios-orders";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = () => ({type: DISHES_SUCCESS});
export const dishesError = error => ({type: DISHES_ERROR, error});

export const getDishesSuccess = (dishes) => ({type: GET_DISHES_SUCCESS, dishes});

export const initMenu = () => ({type: INIT_MENU});

export const addDish = dish => {
    return async dispatch => {
        try {
            dispatch(dishesRequest());
            await axiosOrders.post('/dishes.json', dish);
            dispatch(dishesSuccess());
        } catch (e) {
            dispatch(dishesError(e));
        }
    }
};

export const removeFromMenu = dish => {

};

export const getDishes = () => {
    return async dispatch => {
        try {
            dishesRequest();
            const response = await axiosOrders.get('/dishes.json');
            const dishes = Object.keys(response.data).map(id => {
                return {...response.data[id]}
            });
            dispatch(getDishesSuccess(dishes));
        } catch (e) {
            dishesError(e);
        }
    }
};
