import React from 'react';
import close from './assets/close.svg'

// Function component to show the modal on the page using the .filter() to display only the content of the book that is clicked or focused

const Modal = (props) => {
    const modal = props.selectedBook;
    
    return(
       
     <div>
         {props.show === true
                ? <div className="modal">
                    <div className="modalContent wrapper" onClick={props.close}>
                        <span className="close" aria-label="close"><img src={close} alt=""></img></span>
                        <h4>{`${modal.title} by ${modal.author}`}</h4>
                        <p>{modal.description}</p>
                        <img className="book" src={modal.book_image} alt={`${modal.title} by ${modal.author}`}/>
                    </div>
                    </div>
                : null
         }

    </div>  
    )
}


export default Modal;