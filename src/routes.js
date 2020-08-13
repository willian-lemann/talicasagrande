import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../src/pages/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/admin" render={() => window.location.href = 'http://talicasagrande-admin.netlify.com'} />
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;
