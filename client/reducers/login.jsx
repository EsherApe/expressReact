import { Map } from 'immutable';

const initialState = {
    isLogin: false
};

function login(state = Map(initialState), action) {
    switch(action.type) {
        case 'LOG_IN':
            return state.set('isLogin', true);
            break;
        case 'LOG_OUT':
            return state.set('isLogin', false);
            break;
    }

    return state;
}

export default login;