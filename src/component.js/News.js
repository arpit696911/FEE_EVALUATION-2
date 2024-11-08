import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import loading2 from './loading2.png';
import PropTypes from 'prop-types';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0, 
    };
  }

  static defaultProps = {
    country: "us",
    pagesize: 15,
    category: "general"
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  };
  async componentDidUpdate(prevProps) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            await this.updateNews();
        }
    }
  async componentDidMount() {
    try {
      const url = `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=68b7894522fa4f7491b780fa1bfdc4b4&page=${this.state.page}&pageSize=${this.props.pagesize}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      this.setState({ 
        articles: parsedData.articles, 
        loading: false,
        totalResults: parsedData.totalResults 
      });
    } catch (error) {
      console.error("Error fetching the news:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { mode } = this.props;
    const handlePreClick = async () => {
      console.log("Previous");
      const url = `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=68b7894522fa4f7491b780fa1bfdc4b4&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
      const data = await fetch(url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles, 
        loading: false,
        page: this.state.page - 1 
      });
    };

    const handleNextClick = async () => {
      console.log("Next");
      const url = `https://newsapi.org/v2/top-headlines?q=${this.props.country}&category=${this.props.category}&apiKey=68b7894522fa4f7491b780fa1bfdc4b4&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
      const data = await fetch(url);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const parsedData = await data.json();
      this.setState({ 
        articles: parsedData.articles, 
        loading: false,
        page: this.state.page + 1 
      });
    };

    return (
      <div className={`news-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <div className="container my-4 px-3">
          <img src={loading2} className="rounded mx-auto d-block" alt="loading" style={{ height: '200px' }} />
          <h1 className='text-center' style={{ padding: '20px', color: mode === 'light' ? 'black' : '#e1ebe4' }}>Top Headlines</h1>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <div className="row">
              {this.state.articles.map((element) => {
                if (!element.urlToImage) return null;

                return (
                  <div className="col-md-4" key={element.url}>
                    <Newsitem 
                      mode={mode} 
                      url={element.url} 
                      urltoimage={element.urlToImage} 
                      title={element.title} 
                      desc={element.description} 
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="d-flex justify-content-between">
          <button onClick={handlePreClick} disabled={this.state.page === 1} className="btn btn-dark">Previous</button>
          <button onClick={handleNextClick} 
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)} 
            className="btn btn-dark">
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
