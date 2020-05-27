import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import Products from '../src/pages/Products';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/products" component={Products} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
