import React from 'react'
// just get render function from react-dom. means we don't have to get all of ReactDOM, and use ReactDOM.render
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match
              pattern='/search'
              component={(props) => <Search shows={preload.shows} {...props} />}
            />
            <Match
              pattern='/details/:id'
              component={(props) => {
                const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
                return <Details show={shows[0]} {...props} />
              }}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
})

// need to call render at bottom
render(<App />, document.getElementById('app'))
