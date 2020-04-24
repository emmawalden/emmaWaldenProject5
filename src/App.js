import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './Header.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bookArray: [],
      url: "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=E1ntAP6SqFYuIsPBrhGwXxHj6xBbjTYV",
    };
  }
// Go get book information from API - NYT Books
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    const key = 'E1ntAP6SqFYuIsPBrhGwXxHj6xBbjTYV';
    const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=E1ntAP6SqFYuIsPBrhGwXxHj6xBbjTYV'
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
      url: event.target.id
    }, () => this.getBooks());
  }

  render() {
    // render list of best sellers images to page
    return (
      <>
      <Header />
        <main>
          <section className="wrapper">
            <h2>Looking for your next book to read? Browse the top bestselling non fiction novels per the <a href="https://www.nytimes.com/books/best-sellers/" aria-label="link to New York Times bestsellers list" rel="noopener" target="_blank">New York Times</a> and make a list of the ones you want to read. </h2>
          </section>
          <ul className="bookSelect wrapper">
            <li><button aria-label="click to generate non fiction books" id="nonFiction" onClick={this.handleClick}>Non Fiction</button></li>
            <li><button aria-label="click to generate fiction books" id="Fiction" onClick={this.handleClick}>Fiction</button></li>
            <li><button aria-label="click to generate travel books" id="travel" onClick={this.handleClick}>Travel</button></li>
            <li><button aria-label="click to generate sports books" id="sports" onClick={this.handleClick}>Sports</button></li>
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
