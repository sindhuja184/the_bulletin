import React, { Component } from 'react';
import loading from './loading.gif'; // Ensure the correct path to the image

export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center container">
        <img src={loading} alt="loading" />
      </div>
    );
  }
}
