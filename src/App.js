
import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react'
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
  const [mode, setMode] = useState('light')
  useEffect(() => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#17153B';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [mode]); 

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  
    return (
      <div>
      <Router>
        <Navbar mode = {mode} toggleMode = {toggleMode}/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={setProgress}

          />
          <Routes>
            <Route path="/" element={ <News setProgress={setProgress} category = 'general' pageSize = {6} apiKey = {apikey} country = "in" mode = {mode} />}  />
            <Route path="/about" element={<About mode = {mode}/>} />
            <Route path="/business" element={ <News setProgress={setProgress} category = 'business' pageSize = {6} apiKey = {apikey} country = "in" mode = {mode}/>} />
            <Route path="/entertainment" element={ <News setProgress={setProgress} category = 'entertainment' pageSize = {6} apiKey = {apikey} country = "in" mode = {mode}/>} />
            <Route path="/health" element={ <News setProgress={setProgress} category = 'health' pageSize = {6} apiKey = {apikey} country = "in" mode = {mode}/>} />
            <Route path="/science" element={ <News setProgress={setProgress} category = 'science' pageSize = {6} apiKey = {apikey} country = "in" mode = {mode}/>} />
            <Route path="/sports" element={ <News setProgress={setProgress} category = 'sports' pageSize = {6} apiKey = {apikey} country = "in" mode = {mode}/>} />
            <Route path="/technology" element={ <News setProgress={setProgress} category = 'technology' pageSize = {6} apiKey = {apikey} country = "in" mode = {mode}/>} />
          </Routes>
        </Router>
      </div>
    )
  }

export default App;