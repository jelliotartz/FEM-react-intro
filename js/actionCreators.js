// need curly braces here because SET_SEARCH_TERM is an ES6 named export
import { SET_SEARCH_TERM } from './actions'

// a function that you call, and it gives you back a correctly shaped action
export function setSearchTerm (searchTerm) {
  // ES6 shortened syntax return: { type: SET_SEARCH_TERM, searchTerm  }
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}
