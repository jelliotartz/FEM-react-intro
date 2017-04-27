import React from 'react'
import axios from 'axios'
import Header from './Header'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string,
      imdbID: string
    })
  },
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
      // returns promise
      .then((response) => {
        // this refers to Details - call setState on Details. Using arrow function for .then allows us not to need to add .bind(this) after then
        this.setState({omdbData: response.data})
      })
      .catch((error) => console.error('axios error', error))
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    let rating
    // rating will contain either loading state component or data from the api
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </div>
    )
  }
})

Details.propTypes = {
  params: React.PropTypes.object
}

export default Details
