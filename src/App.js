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
      selectedBook: {},
      // empty array to store books to push to firebase
      savedBooks: [],
      
    };
  };


  componentDidMount() {
    // Go get book information from API - NYT Books
    this.getBooks();

    // variable that references the firebase database
    const dbRef = firebase.database().ref();
    // event listener to fire every time there is a change in the database
    dbRef.on('value', (result) => {
      const newState = [];
      // Store the response from firebase in this variable
      const data = result.val();
      // The data comes back in an object so we loop over it 
      for (let key in data) {
        // push each book to the new state array 
        newState.push({key: key, object: data[key]});
        console.log("key", key);
        console.log("data", data[key].book_image);
      }
      this.setState({
        // update the component's state using the newState array
        savedBooks: newState
      })

      });
      
    
  };

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
        
      });
    });
  };

  handleClick = (event) => {
    // figure out what button was clicked
    // update the state 
    this.setState({
      urlCategory: event.target.id
    }, () => this.getBooks());
  }

  // Modal Functions - when a book is clicked or focused populate the description, title, image of that book in a modal
  openModalHandler = (event) => {
    // loop through the books array and use filter to return the particular book that was clicked

    const selectedBook = this.state.bookArray.filter((book) => {
      return book.rank === parseInt(event.target.id) + 1
    })
  
    
    this.setState({
      // Modal is showing on the page
      isShowing: true,
      // Set the selected book to state
      selectedBook: selectedBook[0]
    });
  }

  closeModalHandler = () => {
    // Modal is not showing on the page
    this.setState({
      isShowing: false
    });
  }

  // This event will fire when there is a click to add a new book to the list
  handleSelect = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(this.state.selectedBook);
  
    this.setState({
      isShowing: false
    });

  };

  // Function to remove books from the saved Books array on click
  removeBook(bookId) {
    console.log(bookId);
    const dbRef = firebase.database().ref();
    dbRef.child(bookId).remove();
    
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
            addToList={this.handleSelect}
          /> 
          <section className="bookList">
            <div className="wrapper">
            <h5>Books To Read</h5>
              <ul className="savedBooks">   
              {this.state.savedBooks.map((book) => {
                return <li key={book.key}>
                  <img src={book.object.book_image} alt={`${book.object.title} by ${book.object.author}`}/><span onClick={() => this.removeBook(book.key)}>X</span>
                  </li>
                  
              })}
                
              </ul> 
            </div>
          </section>
      </main>
      <Footer />
    </>
    );
  };
};

export default App;