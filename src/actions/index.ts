import { Action } from '../components/types';

let nextTodoId = 0;

export const addTodo = (text: string): Action => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = (filter: string): Action => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

export const toggleTodo = (id: number): Action => ({
  type: 'TOGGLE_TODO',
  id
});