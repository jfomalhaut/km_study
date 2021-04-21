import React from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';
import Home from './routers/Home';
import List from './routers/List';
import Header from './components/Header';

function App(){
    return(
        <BrowserRouter>
            <Header /> 

            <Switch>
                <Route path="/Home" component={Home} exact />
                <Route path="/List" component={List} />
                <Redirect to="/Home" />
            </Switch>
        </BrowserRouter>      
    );
}

export default App;

