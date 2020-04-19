import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Cadastro from './pages/cadastro';
import Home from './pages/home';

export default function Routes(params) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/cadastro' component={Cadastro} exact />
            </Switch>
        </BrowserRouter>
    )
}