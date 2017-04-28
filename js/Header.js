import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import { Link } from 'react-router'

// ES6 class syntax
class Header extends React.Component {
  constructor (props) {
    // ensure that this refers to Header when we need it to via constructor - super(props) sets props to inherit from Header
    super(props)
    // .bind(this) on handleSearchTermChange
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  }
  // no comma needed after handleSearchTermChange because this is ES6 class syntax
  render () {
    // utilSpace is either the search input box, or a link to the search page. will be rendered where searchbar goes.
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            Bizzy Bear's Video Emporium
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
