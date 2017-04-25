import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>bizzy bear's video emporium</h1>
        <input type='text' placeholder='search' />
        <Link to='/search'>or browse all</Link>
      </div>
    )
  }
})

export default Landing
