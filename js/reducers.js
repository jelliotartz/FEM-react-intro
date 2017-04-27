// the getInitialState of redux
const DEFAULT_STATE = {
  searchTerm: ''
}

// default parameter: ES6 lets DEFAULT_STATE be set initially in params if it's undefined: const rootReducer = (state = DEFAULT_STATE, action)
const rootReducer = (state, action) => {
  if (!state) {
    state = DEFAULT_STATE // one-liner version with || operator: state = state || DEFAULT_STATE. could also be set in function params with ES6 (see above)
  }
  // every action must have a type. type determines where you route it.
  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer
