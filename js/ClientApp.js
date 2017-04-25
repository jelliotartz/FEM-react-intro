import React from 'react'
// just get render function from react-dom. means we don't have to get all of ReactDOM, and use ReactDOM.render
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import Landing from './Landing'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
})

// need to call render at bottom
render(<App />, document.getElementById('app'))
