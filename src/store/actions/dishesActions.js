import {DISHES_ERROR, DISHES_REQUEST, DISHES_SUCCESS, ADD_TO_MENU, INIT_MENU, REMOVE_FROM_MENU} from "./actionTypes";
import axiosOrders from "../../axios-orders";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = () => ({type: DISHES_SUCCESS});
export const dishesError = error => ({type: DISHES_ERROR, error});

export const addToMenu = (dish) => ({type: ADD_TO_MENU, dish});
export const removeFromMenu = (dish) => ({type: REMOVE_FROM_MENU, dish});
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


export const getDishes = () => {
    return async dispatch => {
        try {
            dishesRequest();
            const response = await axiosOrders.get('/dishes.json');
            const dishes = Object.keys(response.data).map(id => {
                return {...response.data[id]}
            });
            dispatch(dishesSuccess(dishes));
        } catch (e) {
            dishesError(e);
        }
    }
};

