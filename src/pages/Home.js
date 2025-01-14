import React from 'react'
import logo from '../logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'
import Install from './Install'

function Home() {
  //Test -----push
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
        <Link className="App-link" to={'about'}>
          About
        </Link>
        <Install />
      </header>
    </div>
  )
}

export default Home
