import React from 'react'

class Header extends React.Component {
  constructor() {
    super()
  }


  render() {
    const movie = this.props
    return(
      <h1>{movie.title}</h1>
    )
  }
}

export default Header
