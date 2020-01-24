import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import Dishes from "./containers/Dishes/Dishes";
import Dish from "./containers/Dish/Dish";
import EditDish from "./containers/EditDish/EditDish";
import Orders from "./containers/Orders/Orders";


const App = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={Dishes}/>
            <Route path='/dish/:id/edit' exact component={EditDish}/>
            <Route path='/orders' exact component={Orders}/>
            <Route path='/dish' exact component={Dish}/>
            <Route render={() => <h1>Not found</h1>}/>
        </Switch>
    </Layout>
);

export default App;
