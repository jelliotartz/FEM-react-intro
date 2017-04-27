import { SET_SEARCH_TERM } from './actions'

// the getInitialState of redux
const DEFAULT_STATE = {
  searchTerm: ''
}

// a lot of reducers look very similar to this
const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}



// default parameter: ES6 lets DEFAULT_STATE be set initially in params if it's undefined: const rootReducer = (state = DEFAULT_STATE, action)
const rootReducer = (state, action) => {
  if (!state) {
    state = DEFAULT_STATE // one-liner version with || operator: state = state || DEFAULT_STATE. could also be set in function params with ES6 (see above)
  }
  // every action must have a type. type determines where you route it.
  switch (action.type) {
    case SET_SEARCH_TERM:
      // 'dispatching' to another reducer
      return setSearchTerm(state, action) // exact same contract as rootReducer, but only going to handle the setSearchTerm action. using return here gives us the new state at the end - it returns the result of setSearchTerm
    default:
      return state
  }
}

export default rootReducer
