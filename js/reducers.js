import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'

// the getInitialState of redux
const DEFAULT_STATE = {
  searchTerm: '',
  omdbData: {}
}

// a lot of reducers look very similar to this
const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
}

const addOMDBData = (state, action) => {
  const newOMDBData = {}
  // bracket syntax on [action.imdbID] - we want this to be a key in the new object,
    // with all of the omdbData as its value (ie, an object as its value)
    // { 'tt12345': {...} }
  Object.assign(newOMDBData, state.omdbData, {[action.imdbID]: action.omdbData})
  const newState = {}
  Object.assign(newState, state, {omdbData: newOMDBData})
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
    case ADD_OMDB_DATA:
      return addOMDBData(state, action)
    default:
      return state
  }
}

export default rootReducer
