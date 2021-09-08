import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Agenda from './Pages/Agenda';
import Agendamento from './Pages/Agendamento';


function Routes(){
    return(
    <BrowserRouter> 
        <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/cadastro' component={Cadastro}/>
            <Route path='/agenda' component={Agenda}/>
            <Route path='/agendamento' component={Agendamento}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;