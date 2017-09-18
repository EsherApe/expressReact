import { Map } from 'immutable';

const initialState = {
    contentName: 'profile'
};

function content(state = Map(initialState), action) {
    if (action.type === 'SWITCH_CONTENT') {
        return state.set('contentName', action.contentName);
    }
    return state;
}

export default content;