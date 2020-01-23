import React, {Component, Fragment} from 'react';
import Button from "../../components/UI/Button/Button";
import './Dish.css';

class Dish extends Component {

    addDishHandler = () => {

    };


    render() {
        return (
            <Fragment>
                <h1>Add new dish</h1>
                <form onSubmit={this.addDishHandler}>
                    <label htmlFor="name">Title</label>
                    <input className='Input' type="text" name='name' id='name' placeholder='Enter dish title'
                           autoComplete='off'
                    />
                    <label htmlFor="price">Price</label>
                    <input className='Input' type="number" name='price' id='price' placeholder='Enter dish price'
                           autoComplete='off'
                    />
                    <label htmlFor="">Image</label>
                    <input className='Input' type="text" name='image' id='image' placeholder='Enter image url'
                           autoComplete='off'
                    />
                    <Button>ADD</Button>
                </form>
            </Fragment>

        );
    }
}

export default Dish;