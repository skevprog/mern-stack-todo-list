import { API_URL } from './constants';

export const createTodo = (body) => {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(resp => resp.json())
}

export const deleteTodo = (todId) => {
  return fetch(`${API_URL}/${todId}`, { method: 'DELETE' })
    .then(res => res.json())
}

export const getTodos = () => {
  return fetch(API_URL)
    .then(res => res.json())
}