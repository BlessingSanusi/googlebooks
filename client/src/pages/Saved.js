import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'
import SavedCard from '../components/SavedCard'

import API from '../utils/API';


class Saved extends Component {

    state = {
        savedBooks: []
    };

    componentDidMount(){
        API.getBook()
        .then(res => this.setState({
            savedBooks: res.data
        }))
        .catch(err => console.log(err))
    }

    handleDeleteBtn(id){
        API.deleteBook(id)
        .then(res => this.componentDidMount())
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
handleDeleteBtn ={ this.handleDeleteBtn}
    />
      </div>
            </div>
        )
    }
}

export default Saved;