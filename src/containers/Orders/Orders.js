import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getOrders, removeOrder} from "../../store/actions/ordersActions";
import {getDishes} from "../../store/actions/dishesActions";
import Order from "../../components/Order/Order";
import './Orders.css';


class Orders extends Component {

    componentDidMount() {
        this.props.getDishes();
        this.props.getOrders();
    }

    render() {
        let orders = Object.keys(this.props.orders).map(order => (
                <div key={order} className='order'>
                    <div>
                        {Object.keys(this.props.orders[order]).map(item => {
                            const result = Object.keys(this.props.menu).find(dish => dish === item);
                            if (result) {
                                let title = this.props.menu[result].title;
                                let price = this.props.menu[result].price;
                                return <Order
                                    key={item}
                                    title={title}
                                    count={this.props.orders[order][item]}
                                    price={price}
                                />
                            }
                        })}
                        <p className='delivery'>Delivery: 150 KGS</p>
                    </div>
                    <div className='order-info'>
                        <span className='total'>Order total: </span>
                        <span>{Object.keys(this.props.orders[order]).map(ord => {
                            const result = Object.keys(this.props.menu).find(dish => dish === ord);
                            if (result) {
                                const dishPrice = this.props.menu[result].price * this.props.orders[order][ord];
                                return dishPrice;
                            }
                        }).reduce((sum, amount) => (sum + amount), 0) + 150} KGS</span>
                        <button className='order-button' onClick={() => this.props.removeOrder(order)}>Complete order
                        </button>
                    </div>
                </div>
            )
        );

        return (
            <Fragment>
                <h1>Orders</h1>
                <div>
                    {orders}
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state => ({
    orders: state.orders.orders,
    menu: state.dishes.menu,
    loading: state.orders.loading
});

const mapDispatchToProps = dispatch => ({
    getOrders: () => dispatch(getOrders()),
    getDishes: () => dispatch(getDishes()),
    removeOrder: (order) => dispatch(removeOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);