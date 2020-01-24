import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "../UI/Button/Button";
import './Card.css';


const Card = props => {
    return (
        <div className='Card'>
            <img src={props.image} alt={props.title}/>
            <div className='text'>
                <span>{props.title}</span>
                <span><b>{props.price} KGS</b></span>
            </div>
            <NavLink className='edit-button' to={'/dish/' + props.id + '/edit'}>Edit</NavLink>
            <Button onClick={props.deleteDish}>Delete</Button>
        </div>
    );
};

export default Card;