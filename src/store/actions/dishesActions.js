import {
    DISHES_ERROR,
    DISHES_REQUEST,
    DISHES_SUCCESS,
    GET_DISHES_SUCCESS
} from "./actionTypes";
import axiosOrders from "../../axios-orders";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = () => ({type: DISHES_SUCCESS});
export const dishesError = error => ({type: DISHES_ERROR, error});

export const getDishesSuccess = (dishes) => ({type: GET_DISHES_SUCCESS, dishes});

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
    return async dispatch => {
        try {
            dispatch(dishesRequest());
            await axiosOrders.delete('/dishes/' + dish + '.json');
            const response = await axiosOrders.get('/dishes.json');
            const dishes = response.data;
            dispatch(getDishesSuccess(dishes));
        } catch (e) {
            dispatch(dishesError(e));
        }
    }
};

export const getDishes = () => {
    return async dispatch => {
        try {
            dishesRequest();
            const response = await axiosOrders.get('/dishes.json');
            const dishes = response.data;
            dispatch(getDishesSuccess(dishes));
        } catch (e) {
            dishesError(e);
        }
    }
};
