import React from 'react'
// just get render function from react-dom. means we don't have to get all of ReactDOM, and use ReactDOM.render
import { render } from 'react-dom'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      // React syntax: get used to writing className, not class. class = js reserved word.
      <div className='app'>
        <div className='landing'>
          <h1>bizzy bear's video emporium</h1>
          <input type='text' placeholder='search' />
          <a>or browse all</a>
        </div>
      </div>
    )
  }
})

// need to call render at bottom
render(<App />, document.getElementById('app'))
