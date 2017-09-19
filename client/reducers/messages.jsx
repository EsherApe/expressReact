import { Map } from 'immutable';

const initialState = {
    messagesList: [
        {
            id: 1,
            avatar: '/static/img/avatar-1.png',
            text: 'The Strategic Homeland Intervention, Enforcement, and Logistics Division...',
            author: 'Billy Bob',
            authorId: 1,
            isNew: true
        },
        {
            id: 2,
            avatar: '/static/img/avatar-2.png',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            author: 'Elvis Presley',
            authorId: 2,
            isNew: false
        },
        {
            id: 3,
            avatar: '/static/img/avatar-3.png',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            author: 'Madonna',
            authorId: 3,
            isNew: false
        }
    ]
};

function messages(state = Map(initialState), action) {
    // if (action.type === 'SWITCH_CONTENT') {
    //     return state.set('contentName', action.contentName);
    // }
    return state;
}

export default messages;