import React from 'react';

const NewsItem = (props) => {
    // Fallback image URL
    let defaultImageUrl = "https://via.placeholder.com/150?text=No+Image+Available";

    return (
      <div>
        <div className="card">
          <img 
            src={props.imageUrl? props.imageUrl : defaultImageUrl} 
            className="card-img-top" 
            alt="News" 
          />
          <div className="card-body">
            <h5 className="card-title">
              {props.title.length < 45 ? props.title : props.title.slice(0, 45) + "..."}
            </h5>
            <p className="card-text">
              {props.description.length < 88 ? props.description : props.description.slice(0, 88) + "..."}
            </p>
            <p className = "card-text"><small className = "text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
            <a href={props.newsUrl} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
