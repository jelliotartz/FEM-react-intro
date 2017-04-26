import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <div className='details'>
        <h1>gimmie the deets!</h1>
        <pre><code>
          {JSON.stringify(this.props, null, 4)}
        </code></pre>
      </div>
    )
  }
})

Details.propTypes = {
  params: React.PropTypes.object
}

export default Details
