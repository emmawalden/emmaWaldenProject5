import React from 'react';

const Gallery = (props) => {
  
if (props.show === true) {
    // display book description modal content
    return(
        <div className="modalContent">
            <span>x</span>
            <h4>{`${props.bookTitle} by ${props.bookAuthor}`}</h4>
            <p onClick={props.closeModal}>{props.bookDescription}</p> 
        </div>
    )
} 
    return (
        <li tabIndex="0">
            <img 
            id={props.id}
            src={props.bookImg} 
            alt={`${props.bookTitle} by ${props.bookAuthor}`} 
            // onclick set the showing state to true 
            onClick={props.openModal}/>
            
        </li>
    );
}

export default Gallery;