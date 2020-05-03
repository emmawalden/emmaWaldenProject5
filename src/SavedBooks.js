import React, { Component } from 'react';

class SavedBooks extends Component {
render () {
    
    return (
        <li>
            <i
                aria-label="close"
                onClick={() => this.props.removeBook(this.props.id)} className="fas fa-times"></i>
            <img
                src={this.props.bookSrc}
                alt={this.props.bookalt} />
        </li>
        );
    } 
}


export default SavedBooks;