import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import ConversationReducer from './reducer_conversation';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer,
    conversations: ConversationReducer
});

export default rootReducer;
