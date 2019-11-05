import React, { Component } from 'react'
import Jumbotron from '../components/Jumbotron'
import SearchForm from '../components/SearchForm'
import Card from '../components/Card';



import API from '../utils/API';

class Search extends Component {

  state = {
    search: "",
    books: [],
    error: "",
    message: ""
  };


  // handleKeyPress(event){
  //   if(event.key ==='Enter')
  //   this.handleFormSubmit();

  // }
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
   API.getGoogleBooks(this.state.search)
    .then((response) => 
    {
      if (response.data.items === "error") {
          throw new Error(response.data.items);
      }
      
      else {
      let results = response.data.items
      results = results.map(result => {
        result = {
          key: result.id,
          id: result.id,
          title: result.volumeInfo.title,
          author: result.volumeInfo.authors,
          link: result.volumeInfo.infoLink,
          description: result.volumeInfo.description,
          image: result.volumeInfo.imageLinks.thumbnail
          
        }
        return result;
      })  
      this.setState({ books: results, error: "" })
    }

    })
    .catch((error) => {
      console.log(error);
    });
  };

  handleSavedButton = e => {
    e.preventDefault();
    console.log(this.state.books)
    let savedBooks = this.state.books.filter(book => book.id === e.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
        .then(this.setState({ message: alert("Your book is saved") }))
        .catch(err => console.log(err))
  }


render(){


  return (
    <div>
      <div className="container">
      <Jumbotron />
      </div>
      <div className="container">
      <SearchForm 
       handleFormSubmit={this.handleFormSubmit}
       handleInputChange={this.handleInputChange}
      //  handleKeyPress ={this.handleKeyPress}
       
      />
      </div>
      <div className="container">
        <Card 
        books={this.state.books}
        handleSavedButton={this.handleSavedButton}
        />
      </div>

    </div>
    
)

}
    
}

export default Search;