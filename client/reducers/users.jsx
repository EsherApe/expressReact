import { Map } from 'immutable';

const initialState = {
    showUserId: null
};

function users(state = Map(initialState), action) {
    if (action.type === 'SHOW_USER') {
        return state.set('showUserId', action.userId);
    }
    return state;
}

export default users;