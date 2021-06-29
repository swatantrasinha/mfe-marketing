import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {StylesProvider} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return (
    <div>
        <h1>Marketing App - Deployed to Heroku</h1>
        <StylesProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
    )};