import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/Card/Card";
import Spinner from "../../components/UI/Spinner/Spinner";
import {getDishes, removeFromMenu} from "../../store/actions/dishesActions";
import './Dishes.css';


class Dishes extends Component {

    componentDidMount() {
        this.props.getDishes();
    }

    buttonHandler = () => {
        this.props.history.push('/dish');
    };

    editButtonHandler = () => {
        this.props.history.push('/edit-dish');
    };


    render() {
        let menu = this.props.menu.map(dish => {
            return <Card
                key={dish.title}
                title={dish.title}
                image={dish.image}
                price={dish.price}
                editDish={this.editButtonHandler}
                // deleteDish={}
            />
        });

        if (this.props.loading) {
            menu = <Spinner/>
        }

        return (
            <Fragment>
                <div className='header'>
                    <h1 className='header-title'>Dishes</h1>
                    <Button onClick={this.buttonHandler}>
                        Add new dish
                    </Button>
                </div>
                <div>
                    {menu}
                </div>
            </Fragment>


        );
    }
}

const mapStateToProps = state => ({
    menu: state.dishes.menu,
    loading: state.dishes.loading,
});

const mapDispatchToProps = dispatch => ({
    getDishes: () => dispatch(getDishes()),
    removeFromMenu: (dish) => dispatch(removeFromMenu(dish))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);