import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Map } from 'immutable';

import {createStore} from 'redux';
import { Provider } from 'react-redux';

//====================================
//reducer function
const initialState = {
    content: 'profile'
};

function reducer(state = Map(initialState), action) {
    if (action.type === 'SWITCH_CONTENT') {
        return state.set('content', action.content);
    }
    return state;
}

const store = createStore(reducer);
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