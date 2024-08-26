import React, { Component } from 'react';
import loading from './loading.gif'; // Ensure the correct path to the image
import dark from './dark.gif';
const Spinner = (props) => {
    return (
      <div className="text-center container">
        <img src={props.mode === 'dark'?  dark: loading} alt="loading" />
      </div>
    );
}
export default Spinner;