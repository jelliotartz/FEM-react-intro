import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextTypes: {
    router: object
  },
  propTypes: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    // dispatch is available through connect
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    // a form will attempt to navigate the page if you do not preventDefault
    event.preventDefault()
    // programmatically navigate with react router
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>bizzy bear's video emporium</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='search' />
        </form>
        <Link to='/search'>or browse all</Link>
      </div>
    )
  }
})

// take in entire redux store, return just the particular piece of state that this component cares about.
const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}
// landing cares about searchTerm, nothing else from redux. pass in the desired redux state as props to landing.
// landing is now a redux-connected component. connect creates a new function which we immediately invoke (IIFE) on Landing.
export default connect(mapStateToProps)(Landing)
