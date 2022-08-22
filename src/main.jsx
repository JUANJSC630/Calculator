import React from 'react'
import ReactDOM from 'react-dom/client'
import {Calculator} from './Components/Calculator'
import './Styles/StylesCalculator.css'
import './Styles/Movil/StylesCalculatorMovil.css'
import './Styles/StylesIndex.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
)
