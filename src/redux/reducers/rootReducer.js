import { combineReducers } from 'redux';
import  postsReducer  from './postsReducer';
import  usersReducer  from './usersReducer';

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer
  })
  
  export default rootReducer;