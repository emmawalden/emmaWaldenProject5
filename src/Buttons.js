import React from 'react';

const Buttons = (props) => {
    const buttonInfo = [
        { id: "combined-print-and-e-book-nonfiction", "aria-label": "click to generate non fiction books" }
    ]
    
    return (
        <ul className="bookSelect wrapper">
            <li><button aria-label="click to generate non fiction books" id="combined-print-and-e-book-nonfiction" onClick={props.changeBooks}>Non Fiction</button></li>
            <li><button aria-label="click to generate fiction books" id="combined-print-and-e-book-fiction" onClick={props.changeBooks}>Fiction</button></li>
            <li><button aria-label="click to generate travel books" id="travel" onClick={props.changeBooks}>Travel</button></li>
            <li><button aria-label="click to generate sports books" id="sports" onClick={props.changeBooks}>Sports</button></li>
            <li><button aria-label="click to generate young adult books" id="young-adult-hardcover" onClick={props.changeBooks}>Young Adult</button></li>
            <li><button aria-label="click to generate books by comedians" id="humor" onClick={props.changeBooks}>Comedy</button></li>
            <li><button aria-label="click to generate books about business" id="business-books" onClick={props.changeBooks}>Business</button></li>
            <li><button aria-label="click to generate books about crime" id="crime-and-punishment" onClick={props.changeBooks}>Crime & Law</button></li>
        </ul>
    );
}

export default Buttons;