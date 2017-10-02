import { Map } from 'immutable';

const initialState = {
    showUserId: null
};

function users(state = Map(initialState), action) {
    switch(action.type) {
        case 'SHOW_SELECTED_USER':
            return state.set('showUserId', action.userId);
            break;
    }

    return state;
}

export default users;