import { combineReducers } from 'redux';
import content from './content';
import messages from './messages';
import notifications from './notifications';

export default combineReducers({
    content,
    messages,
    notifications
})