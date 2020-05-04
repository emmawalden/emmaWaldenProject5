import React, { Component } from 'react';

class SavedBooks extends Component {

// When enter is pressed on a saved book that has been tabbed to it will remove it from the list
onKeyUp = (event) => {
    if (event.which === 13 && this.props.bookSrc === event.srcElement.lastChild.src) {
        this.props.removeBook(this.props.id)
    }
}

componentDidMount() {
    document.addEventListener("keyup", this.onKeyUp);
}

componentWillUnmount() {
    document.removeEventListener("keyup", this.onKeyUp)
}
render () {
    
    return (
        <li tabIndex="0">
            <i
            aria-label="close"
            onClick={() => this.props.removeBook(this.props.id)}
            className="fas fa-times">
            </i>
            <img
            src={this.props.bookSrc}
            alt={this.props.bookalt} 
            />
        </li>
        );
    } 
}


export default SavedBooks;