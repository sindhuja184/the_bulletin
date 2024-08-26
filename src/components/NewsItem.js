import React from 'react';

const NewsItem = (props) => {
    // Fallback image URL
    const defaultImageUrl = "https://via.placeholder.com/150?text=No+Image+Available";

    // Define styles based on mode
    const cardStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : '#2E236C',
        color: props.mode === 'light' ? 'black' : 'white'
    };

    const textStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : '#2E236C',
        color: props.mode === 'light' ? 'black' : 'white'
    };

    const smallTextStyle = {
        backgroundColor: props.mode === 'light' ? 'white' : '#2E236C',
        color: props.mode === 'light' ? 'black' : '#C8ACD6'
    };

    return (
      <div>
         <div className="card" style={cardStyle}>
          <img 
            src={props.imageUrl ? props.imageUrl : defaultImageUrl} 
            className="card-img-top" 
            alt="News" 
          />
          <div className="card-body" style={cardStyle}>
            <h5 className="card-title">
              {props.title && props.title.length < 45 ? props.title : (props.title ? props.title.slice(0, 45) + "..." : "No Title Available")}
            </h5>
            <p className="card-text" style={textStyle}>
              {props.description && props.description.length < 88 ? props.description : (props.description ? props.description.slice(0, 88) + "..." : "No Description Available")}
            </p>
            <p className="card-text" style={smallTextStyle}>
              <small>By {props.author ? props.author : "Unknown Author"} on {props.date ? new Date(props.date).toGMTString() : "Unknown Date"}</small>
            </p>
            <a href={props.newsUrl} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
