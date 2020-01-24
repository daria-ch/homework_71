import axiosOrders from "../../axios-orders";
import {GET_ORDERS_SUCCESS, ORDERS_ERROR, ORDERS_REQUEST} from "./actionTypes";

export const ordersRequest = () => ({type: ORDERS_REQUEST});
export const getOrdersSuccess = (orders) => ({type: GET_ORDERS_SUCCESS, orders});
export const ordersError = error => ({type: ORDERS_ERROR, error});


export const getOrders = () => {
    return async dispatch => {
        try {
            ordersRequest();
            const response = await axiosOrders.get('/orders.json');
            const orders = response.data;
            dispatch(getOrdersSuccess(orders));
        } catch (e) {
            ordersError(e);
        }
    }
};

export const removeOrder = order => {
    return async dispatch => {
        try {
            dispatch(ordersRequest());
            await axiosOrders.delete('/orders/' + order + '.json');
            const response = await axiosOrders.get('/orders.json');
            const orders = response.data;
            dispatch(getOrdersSuccess(orders));
        } catch (e) {
            dispatch(ordersError(e));
        }
    }
};