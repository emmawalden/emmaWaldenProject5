import React, { Component } from 'react';
import axios from 'axios';
import './Styles/App.scss';
import Header from './Header.js';
import Intro from './Intro.js';
import Buttons from './Buttons.js';
import Gallery from './Gallery.js';
import Modal from './Modal.js';
import Footer from './Footer.js';
import firebase from './firebase.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      bookArray: [],
      urlCategory: "hardcover-fiction",
      isShowing: false,
      selectedBook: {}
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

  // Modal Functions - when a book is clicked or focused populate the description of that book
  openModalHandler = (event) => {
    // loop through your books array and use filter to filter out and return that particular book

    const selectedBook = this.state.bookArray.filter((book) => {
      return book.rank === parseInt(event.target.id) + 1
    })
    // once you have the book object - set that to the state

    this.setState({
      isShowing: true,
      selectedBook: selectedBook[0]
    });
  }

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  }

  render() {
          
    return (
      <>
      <Header />
        <main>
          {/* Intro section to the app */}
          <Intro />
          {/* List of book categories to choose from that will populate new book images and descriptions */}
          <Buttons changeBooks={this.handleClick}/>

          {/* Gallery of book images and descriptions */}
          <ul className="bookGallery wrapper">
            {/* Mapping over the array of books from the API call */}
            {this.state.bookArray.map((book, i) => {
              // Displaying the book image to the page
              return (
                <Gallery 
                  key={i} 
                  id={i}
                  bookImg={book.book_image} 
                  bookTitle={book.title} 
                  bookAuthor={book.author} 
                  openModal={this.openModalHandler}
                />
              );
            })}
          </ul>
          <Modal 
            show={this.state.isShowing}
            selectedBook={this.state.selectedBook}
            close={this.closeModalHandler}
          /> 
      </main>
      <Footer />
    </>
    );
  } 
}

export default App;