import { Map } from 'immutable';

const initialState = Map({
    isLogin: false,
    userId: null,
    userIsLoaded: false
});

function login(state = initialState, action) {
    switch(action.type) {
        case 'LOG_IN':
            return state.merge(action.login);
            break;
        case 'LOG_OUT':
            return state.merge(action.login);
            break;
    }

    return state;
}

export default login;