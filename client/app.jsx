import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components
import Main from './components/main/Main';
import About from './components/about/About';
import NoPage from './components/noPage/NoPage';

console.log('work');

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/about" component={About}/>
            <Route path="*" component={NoPage}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);