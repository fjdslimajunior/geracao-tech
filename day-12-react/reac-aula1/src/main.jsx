import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Frase from './App.jsx'
import Hello from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Frase />
    <Hello />
  </React.StrictMode>,
)

