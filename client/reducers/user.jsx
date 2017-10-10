import { Map } from 'immutable';

const initialState = Map();

function user(state = initialState, action) {
    switch(action.type) {
        case 'GET_USER':
            if(action.user) {
                return state.merge(action.user)
            } else {
                return state.clear();
            }

            break;
    }

    return state;
}

export default user;