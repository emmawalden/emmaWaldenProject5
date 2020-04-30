import React from 'react';

const Gallery = (props) => {
    return (
        <li tabIndex="0">
            <img 
            id={props.id}
            src={props.bookImg} 
            alt={`${props.bookTitle} by ${props.bookAuthor}`} 
            onClick={props.openModal}
            />
            
        </li>
    );
}


export default Gallery;