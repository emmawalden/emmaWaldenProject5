import React from 'react';

function Gallery(props) {
    
        return (
            <li >
                <button tabIndex="0" onClick={() => props.openModalHandler(props.id)}>
                    <img 
                        id={props.id}
                        src={props.bookImg} 
                        alt={`${props.bookTitle} by ${props.bookAuthor}`} 
                        
                    />
                </button>
            </li>
        );
}


export default Gallery;