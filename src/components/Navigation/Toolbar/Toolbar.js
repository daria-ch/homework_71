import React from 'react';
import './Toolbar.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => (
    <header className='Toolbar'>
        <div className='Toolbar-text'>
            Turtle pizza admin
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;