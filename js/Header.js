import React from 'react'
import { Link } from 'react-router'

// ES6 class syntax
class Header extends React.Component {
  render () {
    // utilSpace is either the search input box, or a link to the search page. will be rendered where searchbar goes.
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.props.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='search' />
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
  handleSearchTermChange: func,
  showSearch: bool,
  searchTerm: string
}

export default Header
