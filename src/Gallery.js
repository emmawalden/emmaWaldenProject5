import React from 'react';

function Gallery(props) {
    
    return (
        <li>
            <img src={props.bookImg} alt={props.bookTitle, props.bookAuthor}/>
            <p>{props.bookDescription}</p>
        </li>
    );
}

export default Gallery;