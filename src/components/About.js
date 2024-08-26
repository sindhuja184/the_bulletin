import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function About(props) {
  // Define styles for light and dark modes
  const myStyle = {
    color: props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : '#C8ACD6',
  };

  const accordionStyle = {
    backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#C8ACD6',
  };

  return (
    <div className="container" style={{ marginTop: '5%' }}>
      <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>About Us</h1>
      <div className="accordion" id="accordionExample" style={accordionStyle}>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Welcome to The Bulletin!
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              At The Bulletin, our mission is to deliver the latest and most relevant news to our users, wherever they are. We strive to provide accurate, up-to-date information that keeps you informed and engaged with the world around you.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Overview
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              Our app offers a flexible platform for users to access the latest news. With a user-friendly interface and customizable features, it is designed to enhance your news-reading experience.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Motto
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              Our motto is to keep you informed and engaged with the latest updates. We are committed to delivering high-quality news and information.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Team
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              Meet the dedicated team behind The Bulletin. Our team is composed of experienced professionals who are passionate about delivering quality news and ensuring a seamless user experience.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#343a40' }}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              style={{ backgroundColor: props.mode === 'light' ? '#e9ecef' : '#495057', color: props.mode === 'light' ? 'black' : 'white' }}
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
              If you have any questions or feedback, please reach out to us at contact@thebulletin.com. We are always happy to hear from our users and will do our best to assist you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
