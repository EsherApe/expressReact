import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Main from './components/Main';
import About from './components/About';

console.log('asdadasdads');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/about" component={About}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);