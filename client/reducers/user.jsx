import { Map } from 'immutable';

const initialState = Map({
    isLogin: false
});

function user(state = initialState, action) {
    switch(action.type) {
        case 'LOG_IN':
            return state.merge(action.user);
            break;
        case 'LOG_OUT':
            return state.merge(action.user);
            break;
    }

    return state;
}

export default user;