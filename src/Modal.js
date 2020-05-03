import React, { Component } from 'react';
import close from './assets/close.svg';

// Function component to show the modal on the page using the .filter() to display only the content of the book that is clicked or focused

class Modal extends Component {
// Modal will close when the escape key is pressed
    onKeyUp = (e) => {
        if (e.which === 27) {
            this.props.closeModalHandler(e)
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
                ? <div className="modal">
                    <div className="modalContent wrapper" >
                        <span className="close" aria-label="close" onClick={this.props.closeModalHandler}><img src={close} alt=""></img></span>
                        <h4>{`${modal.title} by ${modal.author}`}</h4>
                        <p>{modal.description}</p>
                        <img value={modal.book_image}className="book" src={modal.book_image} alt={`${modal.title} by ${modal.author}`}/>
                        <button onClick={(event) => this.props.handleSelect(event)}><i className="far fa-heart"></i>Add to list</button>
                    </div>
                    </div>
                : null
         }

    </div>  
    )
  }
}



export default Modal;