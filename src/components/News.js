import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component { 


  static defaultProps= {
    pageSize : 6,
    apiKey : "7c93f0d52dc9419688708d9c4a727c71",
    country :"in",
    category: "general",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func.isRequired, // Ensure setProgress is passed as a function
  }

  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    //constructor to initialize

    constructor(props){
        super(props);
        this.state = {
            articles : [], 
            loading : false,
            page : 1,
            totalResults:0,  
        };
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - The Bulletin`;
    }

  //As we deal with promises during fetching process, we use async function
  async fetchNews(){
    this.props.setProgress(0);
    this.setState({loading:true});
    //let url = `https://newsapi.org/v2/top-headlines?q=trump&apiKey=${apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(40);
    this.setState({
      articles: this.state.page === 1 ? parsedData.articles : [...this.state.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      loading : false,
    });
    this.props.setProgress(100);
  }

//   The componentDidMount function is a lifecycle method in React that is invoked immediately after a component is mounted (inserted into the tree). This method is commonly used to perform tasks that require the DOM to be ready, such as:
// Fetching Data: It's often used to fetch data from an API or a remote server. This is because the component is now part of the DOM, and any data fetched can be rendered immediately.
// Setting Up Subscriptions: You can also set up any subscriptions or event listeners here, though you should clean them up in componentWillUnmount to avoid memory leaks.
// Triggering Initial Renders: If there's something that needs to trigger a render after the initial one (like fetching data), this is where you'd do it.
  async componentDidMount(){
    this.fetchNews();
  }

  async componentDidUpdate(prevProps) {
    // Check if the category or country has changed
    if (this.props.category !== prevProps.category || this.props.country !== prevProps.country) {
      // Reset the page state to 1 when the category or country changes
      this.setState({ page: 1 }, this.fetchNews);
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - The Bulletin`;
  }
  fetchMoreData = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      this.fetchNews
    );
  };


  render() {
    return (
      <div className = "container ">
        <h1 className='text-center' style={{marginBottom : 50}}>Top News-{this.capitalizeFirstLetter(this.props.category)}</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className = "row">
              {this.state. articles.map((element) => {
                  return <div key = {element.url}  
                          className = "col-md-4 my-2">
                  <NewsItem 
                      title = {element.title?element.title:""}
                      description = {element.description?element.description:""}
                      imageUrl = {element.urlToImage}
                      newsUrl = {element.url}
                      author = {element.author}
                      date = {element.publishedAt}
                  />
                  </div>
              })}
          </div> 
        </InfiniteScroll>

      </div>
    );
  }
}

export default News;
