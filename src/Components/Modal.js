import React, { Component } from 'react';
import close from '../assets/close.svg';

// Function component to show the modal on the page using the .filter() to display only the content of the book that is clicked or focused

 class Modal extends Component  { 
    constructor(props) {
        super(props);
        this.button = null;
        this.setRef = element => {
            this.button = element;
        };
        this.focusButton = () => {
            if (this.button) this.button.focus();
        }
    }
    
// Modal will close when the escape key is pressed
    onKeyUp = (event) => {
        if (event.which === 27) {
            this.props.closeModalHandler(event)
        } else if (event.which === 13)
            this.focusButton();
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
                ? <div className="modal">
                    <div className="modalContent wrapper">
                        <span className="close" aria-label="close" onClick={this.props.closeModalHandler}><img src={close} alt=""></img></span>
                        <h4><span>{modal.title}</span> by {modal.author}</h4>
                        <p>{modal.description}</p>
                        <img value={modal.book_image}className="book" src={modal.book_image} alt={`${modal.title} by ${modal.author}`}/>
                        <button ref={this.setRef} onKeyUp={this.focusButton} 
                        onClick={(event) => {
                            this.props.duplicateBook();
                            this.props.handleSelect(event);
                        }}><i tabIndex="1" className="fas fa-heart" ></i>Add to list</button>
                    </div>
                 </div>
                : null
            }

    </div>  
    )
  }
}
export default Modal;