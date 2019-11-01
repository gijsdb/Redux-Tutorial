import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// Combines the reducer todos and visibility filter
export default combineReducers({
  todos,
  visibilityFilter
})