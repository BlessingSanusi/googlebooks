import React from "react";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="card bg-secondary mb-3" >
    <div className="card-header">Search for a Book</div>
    <div className="card-body">
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Book Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="book"
          list="books"
          type="text"
          className="form-control"
          placeholder="Ready Player One"
          id="breed"
          onKeyPress={props.handleKeyPress}
        />
        {/* <datalist id="breeds">
          {props.breeds.map(breed => (
            <option value={breed} key={breed} />
          ))}
        </datalist> */}
        <br/>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    </div>
  </div>
   
  );
}

export default SearchForm;
