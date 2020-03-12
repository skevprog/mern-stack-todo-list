import { GET_TODOS, ADD_TODO, DELETE_TODO } from '../actions/types';
import { API_URL } from '../../utilities';
import axios from 'axios';


export const getTodos = () => dispatch => {
  axios.get(API_URL).then(res => {
    dispatch({
      type: GET_TODOS,
      payload: res.data.data
    })
  })
}

export const createTodo = (todo) => dispatch => {
  axios.post(API_URL, todo).then(res => {
    dispatch({
      type: ADD_TODO,
      payload: res.data.data,
    });
  });
}

export const deleteTodo = (id) => dispatch => {
  axios.delete(`${API_URL}/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_TODO,
        payload: id,
      })
    })
}