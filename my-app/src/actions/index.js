// Holds all my actions for the app
let nextTodoId = 0

export const ADD_TODO = 'ADD_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SHOW_ALL =  'SHOW_ALL';
export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';

// Add todo  and increment id
export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

// Filter the list
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

// Toggle a todo
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

// The different visibility filters exported as one
export const VisibilityFilters = {
  SHOW_ALL: SHOW_ALL,
  SHOW_COMPLETED: SHOW_COMPLETED,
  SHOW_ACTIVE: SHOW_ACTIVE
}