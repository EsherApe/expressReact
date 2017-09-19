import { Map } from 'immutable';

const initialState = {
    notificationsList: [
        {
            id: 0,
            text: 'The Strategic Homeland Intervention, Enforcement, and Logistics Division...',
            isNew: true
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isNew: true
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            isNew: false
        }
    ]
};

function notifications(state = Map(initialState), action) {
    // if (action.type === 'SWITCH_CONTENT') {
    //     return state.set('contentName', action.contentName);
    // }
    return state;
}

export default notifications;