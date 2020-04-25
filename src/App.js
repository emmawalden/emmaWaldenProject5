import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Header.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bookArray: [],
      urlCategory: "hardcover-fiction"
    };
  }
// Go get book information from API - NYT Books
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    const key = 'E1ntAP6SqFYuIsPBrhGwXxHj6xBbjTYV';
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/${this.state.urlCategory}.json?api-key=E1ntAP6SqFYuIsPBrhGwXxHj6xBbjTYV`;
    
    axios({
      method: 'GET',
      url: url,
      "api-key": key,
      format: 'json',
    }).then((res) => {
      
      this.setState({
        bookArray: res.data.results.books
        
      })
    })
  }

  handleClick = (event) => {
    // figure out what button was clicked
    console.log(event.target.id);
    // update the state 
    this.setState({
      urlCategory: event.target.id
    }, () => this.getBooks());
  }

  render() {
    // render list of best sellers images to page
    return (
      <>
      <Header />
        <main>
          <section className="wrapper">
            <h2>Looking for your next book to read? Choose a category below and browse the bestselling books per the <a href="https://www.nytimes.com/books/best-sellers/" aria-label="link to New York Times bestsellers list" rel="noopener" target="_blank">New York Times</a> make a list of the ones you want to read. </h2>
          </section>
          <ul className="bookSelect wrapper">
            <li><button aria-label="click to generate non fiction books" id="combined-print-and-e-book-nonfiction" onClick={this.handleClick}>Non Fiction</button></li>
            <li><button aria-label="click to generate fiction books" id="combined-print-and-e-book-fiction" onClick={this.handleClick}>Fiction</button></li>
            <li><button aria-label="click to generate travel books" id="travel" onClick={this.handleClick}>Travel</button></li>
            <li><button aria-label="click to generate sports books" id="sports" onClick={this.handleClick}>Sports</button></li>
            <li><button aria-label="click to generate young adult books" id="young-adult-hardcover" onClick={this.handleClick}>Young Adult</button></li>
            <li><button aria-label="click to generate books by comedians" id="humor" onClick={this.handleClick}>Comedy</button></li>
            <li><button aria-label="click to generate books about business" id="business-books" onClick={this.handleClick}>Business</button></li>
            <li><button aria-label="click to generate books about crime" id="crime-and-punishment" onClick={this.handleClick}>Crime & Law</button></li>
          </ul>

        <ul className="bookGallery wrapper">
          {this.state.bookArray.map((book) => {
  
            return (
              <li>
                <img src={book.book_image} alt=""/>
                <p>{book.description}</p>
              </li>
            );
          })}
        </ul>
        
      </main>
    </>
    );
  } 
}

export default App;
