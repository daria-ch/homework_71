import React, {Component} from 'react';
import Button from "../../components/UI/Button/Button";
import './Dishes.css';

class Dishes extends Component {


    buttonHandler = () => {
        this.props.history.push('/dish');
    };

    render() {
        return (

                <div className='header'>
                    <h1 className='header-title'>Dishes</h1>
                    <Button onClick={this.buttonHandler}>
                        Add new dish
                    </Button>
                </div>


        );
    }
}

export default Dishes;