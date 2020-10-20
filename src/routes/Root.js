import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import App from '../components/App'
import Home from '../components/Home'
import Test from '../components/Test'

function Root() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/test" component={Test}/>
            </div>
        </BrowserRouter>
    );
};

export default Root;