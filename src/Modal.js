import React from 'react';

// Function component to show the modal on the page using the .filter() to display only the content of the book that is clicked or focused

const Modal = (props) => {
    const modal = props.selectedBook;
    return(
       
     <div>
         {props.show === true
                ? <div className="modal">
                    <div className="modalContent wrapper">
                        <span className="close"><img src="./assets/close.svg"></img></span>
                        <h4>{`${modal.title} by ${modal.author}`}</h4>
                        <p>{modal.description}</p>
                        <img src={modal.book_image} alt={`${modal.title} by ${modal.author}`}/>
                    </div>
                    </div>
                : null
         }

    </div>  
    )
}


export default Modal;