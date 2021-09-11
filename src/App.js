import React from 'react';
// import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {Switch, Route, Router} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

//  export default () => {
    export default ({history}) => {
   
    return (
    <div>
        <h3>Marketing App</h3>
        <StylesProvider generateClassName={generateClassName}>
            {/* <BrowserRouter> */}
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
            {/* </BrowserRouter> */}
        </StylesProvider>
    </div>
    )};