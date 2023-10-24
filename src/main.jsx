import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export const server = 'https://api.themoviedb.org/3/movie/api_key=dc17a8ea3e00b27822e294d220850a56'