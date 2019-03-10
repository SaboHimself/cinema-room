import React from 'react'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'

const tmdbkey = process.env.TMDB_API_KEY

const getSuggestionValue = suggestion => {
  const newSuggestion = suggestion.title
  return newSuggestion
}

const renderSuggestion = suggestion => (
  <div>
    <div>
      {suggestion.title}
    </div>
    <img src={
      // temp no image
      suggestion.poster_path === null ?
        'https://image.shutterstock.com/image-vector/black-linear-photo-camera-logo-260nw-622639151.jpg' :
        `https://image.tmdb.org/t/p/w45${suggestion.poster_path}` }
    />
    <div className="searchResult-date">
      {suggestion.release_date.slice(0, 4)}
    </div>
  </div>
)

class Search extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
      suggestions: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested({ value }) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0 ? [] : axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: tmdbkey,
        query: value
      }
    })
      .then(response => {
        this.setState({suggestions: response.data.results})
      })
      .catch(error => {
        console.log(`Error Message ${error}`)
      })
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    })
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Search',
      value,
      onChange: this.onChange
    }

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    )
  }
}

export default Search
