import React, { Component } from 'react';

class Intro extends Component { 
    render() {
        return (
            <section className="wrapper">
                <h2>Looking for your next book to read? Choose a category below and browse the bestselling books per the <a href="https://www.nytimes.com/books/best-sellers/" aria-label="link to New York Times bestsellers list" rel="noopener noreferrer" target="_blank">New York Times</a> click on a book to read more and create a list of the ones you want to read. </h2>
            </section>
        )
    }
}

export default Intro;