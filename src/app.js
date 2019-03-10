import React from 'react'
import ReactDOM from 'react-dom'

import './style.scss'

import Header from './components/header'
import Landing from './components/landing'
import Search from './components/search'

const App = () => {
  return (
    <div>
      <Header />
      <Search />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
