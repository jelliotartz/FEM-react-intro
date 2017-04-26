import React from 'react'
import { Link } from 'react-router'

// ES6 class syntax
class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>
          <Link to='/'>
            Bizzy Bear's Video Emporium
          </Link>
        </h1>
      </header>
    )
  }
}

export default Header
