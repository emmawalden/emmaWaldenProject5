import React from 'react';

// Function component to show the modal on the page using the .filter() to display only the content of the book that is clicked or focused

const Modal = (props) => {

    return(
     <div>
         {props.show === true
                ? <div className="modalContent">
                    <span>x</span>
                    <h4>{`${props.selectedBook.title} by ${props.selectedBook.author}`}</h4>
                    <p>{props.selectedBook.description}</p>
                </div>
                : null
         }

    </div>  
    )
}


export default Modal;