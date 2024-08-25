
import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import PropTypes from 'prop-types'
import{
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

const App = (props) => {
  let pageSize = 6;
  let apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
    return (
      <div>
      <Router>
        <Navbar/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={setProgress}

          />
          <Routes>
            <Route path="/" element={ <News setProgress={setProgress} category = 'general' pageSize = {6} apiKey = {apikey} country = "in"/>}  />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={ <News setProgress={setProgress} category = 'business' pageSize = {6} apiKey = {apikey} country = "in"/>} />
            <Route path="/entertainment" element={ <News setProgress={setProgress} category = 'entertainment' pageSize = {6} apiKey = {apikey} country = "in"/>} />
            <Route path="/health" element={ <News setProgress={setProgress} category = 'health' pageSize = {6} apiKey = {apikey} country = "in"/>} />
            <Route path="/science" element={ <News setProgress={setProgress} category = 'science' pageSize = {6} apiKey = {apikey} country = "in"/>} />
            <Route path="/sports" element={ <News setProgress={setProgress} category = 'sports' pageSize = {6} apiKey = {apikey} country = "in"/>} />
            <Route path="/technology" element={ <News setProgress={setProgress} category = 'technology' pageSize = {6} apiKey = {apikey} country = "in"/>} />
          </Routes>
        </Router>
      </div>
    )
  }

export default App;