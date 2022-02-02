import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import App from './App'
import isMobile from 'is-mobile'

if (isMobile()) location.replace('/links')
ReactDOM.render(<App />, document.getElementById('root'))
