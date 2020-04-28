import React from 'react';

function Buttons(props) {
    
    const buttonInfo = [
        { name: "Non Fiction", id: "combined-print-and-e-book-nonfiction", "aria-label": "click to generate non fiction books" },
        { name: "Fiction", id: "combined-print-and-e-book-fiction", "aria-label": "click to generate fiction books" },
        { name: "Travel", id: "travel", "aria-label": "click to generate travel books" },
        { name: "Sports", id: "sports", "aria-label": "click to generate sports books" },
        { name: "Young Adult", id: "young-adult-hardcover", "aria-label": "click to generate young adult books" },
        { name: "Comedy", id: "humor", "aria-label": "click to generate comedy books" },
        { name: "Business", id: "business-books", "aria-label": "click to generate business books" },
        { name: "Crime & Punishment", id: "crime-and-punishment", "aria-label": "click to generate crime & law books" },

    ]
    
    return (
        <ul className="bookSelect wrapper">
            {buttonInfo.map((button) => {
                return(
                <li key={button.id}>
                    <button
                    id={button.id}
                    aria-label={button["aria-label"]}
                    onClick={props.changeBooks}
                    >{button.name}</button>
                </li>
                )
                // <li><button aria-label={buttonInfo.id} id="combined-print-and-e-book-nonfiction" onClick={props.changeBooks}>Non Fiction</button></li>
                // )
            })}
        </ul>
    );
}

export default Buttons;