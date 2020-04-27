import React, { Component } from 'react';
import axios from 'axios';
import './Styles/App.scss';
import Header from './Header.js';
import Section from './Section.js';
import Buttons from './Buttons.js';
import Gallery from './Gallery.js';

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
          {/* Intro section to the app */}
          <Section />
          {/* List of book categories to choose from that will populate new book images and descriptions */}
          <Buttons changeBooks={this.handleClick}/>

          {/* Gallery of book images and descriptions */}
          <ul className="bookGallery wrapper">
            {/* Mapping over the array of books from the API call */}
            {this.state.bookArray.map((book) => {

              // Displaying the book image and description to the page
              return (
                <Gallery key={book.bookTitle} bookImg={book.book_image} bookDescription={book.description} bookTitle={book.title} bookAuthor={book.author} />
              );
            })}
          </ul>
        
      </main>
    </>
    );
  } 
}

export default App;
