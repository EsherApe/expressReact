import { Map } from 'immutable';

const initialState = Map({});

function user(state = initialState, action) {
    switch(action.type) {
        case 'GET_USER':
            console.log(action);
            return state.merge(action.user);
            break;
    }

    return state;
}

export default user;