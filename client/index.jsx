import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

//====================================
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//============================================================

// components
import Main from './components/app/App';
import About from './components/about/About';
import NoPage from './components/noPage/NoPage';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About}/>
                <Route path="*" component={NoPage}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);