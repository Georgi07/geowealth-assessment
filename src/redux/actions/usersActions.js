import { 
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
    } from '../actionTypes';
import axios from 'axios';

export const fetchUsers = () => {
    return dispatch => {
       dispatch(fetchUsersRequest())
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response => {
           dispatch(fetchUsersSuccess(response.data))
       })
       .catch(errorMessage => {
           dispatch(fetchUsersError(errorMessage))
       })
    }
}
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess = (users) => {
  return {
      type: FETCH_USERS_SUCCESS,
      payload: users
  }
}
export const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}
