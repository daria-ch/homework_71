import React, {Component, Fragment} from 'react';
import Button from "../../components/UI/Button/Button";
import './Dish.css';
import {connect} from "react-redux";
import {addDish} from "../../store/actions/dishesActions";

class Dish extends Component {
    state = {
        image: '',
        price: '',
        title: ''
    };

    valueChanged = (event) => this.setState({[event.target.name]: event.target.value});

    addDishHandler = async (event) => {
        event.preventDefault();
        const dish = {
            title: this.state.title,
            price: this.state.price,
            image: this.state.image
        };
        await this.props.addDish(dish);
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <h1>Add new dish</h1>
                <form onSubmit={this.addDishHandler}>
                    <label htmlFor="title">Title</label>
                    <input className='Input' type="text" name='title' id='title' placeholder='Enter dish title'
                           autoComplete='off'
                           value={this.state.title}
                           onChange={this.valueChanged}
                    />
                    <label htmlFor="price">Price</label>
                    <input className='Input' type="number" name='price' id='price' placeholder='Enter dish price'
                           autoComplete='off'
                           value={this.state.price}
                           onChange={this.valueChanged}
                    />
                    <label htmlFor="">Image</label>
                    <input className='Input' type="text" name='image' id='image' placeholder='Enter image url'
                           autoComplete='off'
                           value={this.state.image}
                           onChange={this.valueChanged}
                    />
                    <Button>ADD</Button>
                </form>
            </Fragment>

        );
    }
}

const mapDispatchToProps = dispatch => ({
    addDish: dish => dispatch(addDish(dish))
});

export default connect(null, mapDispatchToProps)(Dish);