
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import About from './components/About';
import PropTypes from 'prop-types'
import{
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={ <News category = 'general' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>}  />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={ <News category = 'business' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/entertainment" element={ <News category = 'entertainment' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/health" element={ <News category = 'health' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/science" element={ <News category = 'science' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/sports" element={ <News category = 'sports' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/technology" element={ <News category = 'technology' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

