import React, {Component, Fragment} from 'react';
import axiosOrders from "../../axios-orders";
import Button from "../../components/UI/Button/Button";

class EditDish extends Component {
    state = {
        image: '',
        price: '',
        title: ''
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axiosOrders.get('/dishes/' + id + '.json');
        this.setState({image: response.data.image, price: response.data.price, title: response.data.title});
    }

    inputChangeHandler = e => this.setState({[e.target.name]: e.target.value});

    changeDishHandler = async (e) => {
        e.preventDefault();

        const changedDish = {
            image: this.state.image,
            price: this.state.price,
            title: this.state.title
        };
        this.setState({image: '', price: '', title: ''});

        const id = this.props.match.params.id;
        await axiosOrders.put('/dishes/' + id + '.json', changedDish);
        this.props.history.push('/');
    };

    render() {
        return (
            <Fragment>
                <h1>Edit dish</h1>
                <form onSubmit={this.changeDishHandler}>
                    <label htmlFor="title">Title</label>
                    <input className='Input' type="text" name='title' id='title' placeholder='Enter dish title'
                           autoComplete='off'
                           value={this.state.title}
                           onChange={this.inputChangeHandler}
                    />
                    <label htmlFor="price">Price</label>
                    <input className='Input' type="number" name='price' id='price' placeholder='Enter dish price'
                           autoComplete='off'
                           value={this.state.price}
                           onChange={this.inputChangeHandler}
                    />
                    <label htmlFor="">Image</label>
                    <input className='Input' type="text" name='image' id='image' placeholder='Enter image url'
                           autoComplete='off'
                           value={this.state.image}
                           onChange={this.inputChangeHandler}
                    />
                    <Button>ADD</Button>
                </form>
            </Fragment>
        );
    }
}

export default EditDish;