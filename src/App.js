import React from 'react';
import {Route, Switch} from 'react-router-dom';


const App = () => (
    <Switch>
        {/*<Route path='/' exact component={Dishes}/>*/}
        {/*<Route path='/orders' exact component={Orders}/>*/}
        {/*<Route path='/dish' exact component={Dish}/>*/}
        <Route render={() => <h1>Not found</h1>}/>
    </Switch>
);

export default App;
