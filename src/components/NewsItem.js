import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date} = this.props;

    // Fallback image URL
    let defaultImageUrl = "https://via.placeholder.com/150?text=No+Image+Available";

    return (
      <div>
        <div className="card">
          <img 
            src={imageUrl ? imageUrl : defaultImageUrl} 
            className="card-img-top" 
            alt="News" 
          />
          <div className="card-body">
            <h5 className="card-title">
              {title.length < 45 ? title : title.slice(0, 45) + "..."}
            </h5>
            <p className="card-text">
              {description.length < 88 ? description : description.slice(0, 88) + "..."}
            </p>
            <p className = "card-text"><small className = "text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
