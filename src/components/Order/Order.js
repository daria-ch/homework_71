import React from 'react';
import './Order.css';


const Order = props => {
    return (
        <div className='order-card'>
            <span>{props.count} X </span>
            <span>{props.title} </span>
            <span>{props.price} KGS</span>
        </div>
    );
};


export default Order;