import React from 'react'
import axios from 'axios'
const tmdbkey = process.env.TMDB_API_KEY

class Landing extends React.Component {
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
        id: res.data.id,
        title: res.data.title,
        tagline: res.data.tagline,
        overview: res.data.overview,
        posterImage: res.data.poster_path,
        genre: res.data.genres,
        release: res.data.release_date,
        vote: res.data.vote_average,
        runtime: res.data.runtime,
        backgroundImage: res.data.backdrop_path
      }))
  }

  render() {
    console.log(this.state)
    return(
      <section>
        {this.state &&
          <div>
            <h1>{this.state.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${this.state.posterImage}`}/>
          </div>
        }
      </section>
    )
  }
}

export default Landing
