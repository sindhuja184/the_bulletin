import React, { Component } from 'react';
import loading from './loading.gif'; // Ensure the correct path to the image

const Spinner = (props) => {
    return (
      <div className="text-center container">
        <img src={loading} alt="loading" />
      </div>
    );
}
export default Spinner;
