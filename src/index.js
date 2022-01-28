import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './css/style.css'
import { names } from './data/index'

ReactDOM.render(
  <React.StrictMode>
    <App names={names} />
  </React.StrictMode>,
  document.getElementById('root')
)
