import { Map } from 'immutable';

const initialState = {
    activeTab: null,
    userId: null
};

function viewedUser(state = Map(initialState), action) {
    switch(action.type) {
        case 'SHOW_SELECTED_USER':
            return state.merge(action.data);
            break;
    }

    return state;
}

export default viewedUser;