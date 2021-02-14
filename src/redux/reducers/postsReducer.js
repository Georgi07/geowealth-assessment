import { 
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR
    } from '../actionTypes';

const initialState = {
    posts: [],
    loading: false,
    error: ''
}

const postsReducer = (state = initialState, action) => {
  switch(action.type){
      case FETCH_POSTS_REQUEST: 
          return {
              ...state,
              loading: true
          };
      case FETCH_POSTS_SUCCESS:
          return {
            ...state,
            loading: false,
            posts: action.payload,
            error: ''
          };
      case FETCH_POSTS_ERROR:
          return {
            ...state,
            loading: false,
            posts: [],
            error: action.payload
          };
      default: return state;
  }
}
export default postsReducer;