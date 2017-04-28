// need curly braces here because SET_SEARCH_TERM is an ES6 named export
import { SET_SEARCH_TERM, ADD_OMDB_DATA } from './actions'
import axios from 'axios'

// a function that you call, and it gives you back a correctly shaped action
export function setSearchTerm (searchTerm) {
  // ES6 shortened syntax return: { type: SET_SEARCH_TERM, searchTerm  }
  return { type: SET_SEARCH_TERM, searchTerm: searchTerm }
}

export function addOMDBData (imdbID, omdbData) {
  return { type: ADD_OMDB_DATA, imdbID: imdbID, omdbData: omdbData }
}

// our thunkCreator - going to return a function instead of an object
export function getOMDBDetails (imdbID) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
      // returns promise
      .then((response) => {
        dispatch(addOMDBData(imdbID, response.data))
      })
      .catch((error) => console.error('axios error', error))
  }
}
