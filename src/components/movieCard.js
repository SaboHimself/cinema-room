import React from 'react'
import axios from 'axios'
const tmdbkey = process.env.TMDB_API_KEY

class MovieCard extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    this.getMovie()
  }

  getMovie() {
    axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${tmdbkey}&language=en-GB`)
      .then(res => this.setState({
        title: res.data.title,
        posterImg: res.data.poster_path,
        backdropImg: res.data.backdrop_path
      }))
  }

  render() {
    console.log(this.state)
    return(
      <section>
        {this.state.movie &&
          <div>
            <h1>{this.state.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.posterImg}`}/>
          </div>
        }
      </section>
    )
  }
}

export default MovieCard
