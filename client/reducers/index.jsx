import { combineReducers } from 'redux';
import content from './content';
import messages from './messages';
import notifications from './notifications';
import viewedUser from './viewedUser';
import user from './user';
import login from './login';

export default combineReducers({
    content,
    messages,
    notifications,
    viewedUser,
    user,
    login
})