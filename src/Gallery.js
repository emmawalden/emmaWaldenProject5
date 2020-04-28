import React from 'react';

function Gallery(props) {

    return (
        <li tabIndex="0">
            <img src={props.bookImg} alt={`${props.bookTitle} by ${props.bookAuthor}`}/>
            <p>{props.bookDescription}</p>
        </li>
    );
}

export default Gallery;