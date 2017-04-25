import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>bizzy bear's video emporium</h1>
        <input type='text' placeholder='search' />
        <a>or browse all</a>
      </div>
    )
  }
})

export default Landing
