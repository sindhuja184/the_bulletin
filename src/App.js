
import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import News from './components/News';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'
import PropTypes from 'prop-types'
import{
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom'

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress });
  };
  render() {
    return (
      <div>
      <Router>
        <Navbar/>
          <LoadingBar
            color='#f11946'
            height={4}
            progress={this.state.progress}

          />
          <Routes>
            <Route path="/" element={ <News setProgress={this.setProgress} category = 'general' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>}  />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={ <News setProgress={this.setProgress} category = 'business' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/entertainment" element={ <News setProgress={this.setProgress} category = 'entertainment' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/health" element={ <News setProgress={this.setProgress} category = 'health' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/science" element={ <News setProgress={this.setProgress} category = 'science' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/sports" element={ <News setProgress={this.setProgress}category = 'sports' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
            <Route path="/technology" element={ <News setProgress={this.setProgress} category = 'technology' pageSize = {6} apiKey = "7c93f0d52dc9419688708d9c4a727c71" country = "in"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

