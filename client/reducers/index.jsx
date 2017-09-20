import { combineReducers } from 'redux';
import content from './content';
import messages from './messages';
import notifications from './notifications';
import users from './users';
import user from './user';

export default combineReducers({
    content,
    messages,
    notifications,
    users,
    user,
})