import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'
import SavedCard from '../components/SavedCard'

import API from '../utils/API';


class Saved extends Component {

    state = {
        savedBooks: []
    };

    // grabbing all saved book when page loads
    componentDidMount() {
   this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks()
        .then((res) => {
            this.setState({ savedBooks: res.data });
        })
        .catch((err) => console.log(err));
      };

    //deleting a book by id 
    handleDeleteButton = id => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                 <div className="container container-fluid">
      <Jumbotron />
      </div>
      <div className="container">
    < SavedCard 
        savedBooks={this.state.savedBooks}
        handleDeleteButton={this.handleDeleteButton} 
    />
      </div>
            </div>
        )
    }
}

export default Saved;