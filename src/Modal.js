import React, { Component } from 'react';
import close from './assets/close.svg';

// Function component to show the modal on the page using the .filter() to display only the content of the book that is clicked or focused

class Modal extends Component {

   
// Modal will close when the escape key is pressed
    onKeyUp = (event) => {
        if (event.which === 27) {
            this.props.closeModalHandler(event)
        } 
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyUp);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyUp)
    }

    render() {
        const modal = this.props.selectedBook;
    return(
       
     <div>
         {this.props.isShowing === true
                ? <div className="modal" id="modal">
                    <div className="modalContent wrapper">
                        <span tabIndex="5" className="close" aria-label="close" onClick={this.props.closeModalHandler}><img src={close} alt=""></img></span>
                        <h4 tabIndex="1"><span>{modal.title}</span> by {modal.author}</h4>
                        <p tabIndex="2">{modal.description}</p>
                        <img tabIndex="3" value={modal.book_image}className="book" src={modal.book_image} alt={`${modal.title} by ${modal.author}`}/>
                        <button onClick={(event) => this.props.handleSelect(event)}><i tabIndex="4" className="fas fa-heart"></i>Add to list</button>
                    </div>
                 </div>
                : null
         }

    </div>  
    )
  }
}



export default Modal;