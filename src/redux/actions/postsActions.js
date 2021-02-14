import { 
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_ERROR
    } from '../actionTypes';
import axios from 'axios';
export const fetchPosts = (userId) => {
    return dispatch => {
        dispatch(fetchPostsRequest())
        axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(response => {
            // console.log(response.data)
            dispatch(fetchPostsSuccess(response.data))
        })
        .catch(errorMessage => {
            dispatch(fetchPostsError(errorMessage))
        })
     }
}
export const fetchPostsRequest = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}
export const fetchPostsSuccess = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}
export const fetchPostsError = (error) => {
    return {
        type: FETCH_POSTS_ERROR,
        payload: error
    }
}