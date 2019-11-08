import React from 'react'

 const Card = props =>  {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-header">
                <h3>Seacrh Results</h3>
            </div>
            <div className="card-body">
                    <h3 className="text-center">Search For Your Next Book</h3>
                
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <h3>Search Results</h3>
                    {props.books.map(book => {
                        return(
                           <div className="card-body" key={book.id}>
                                <li className="list-group-item">
                                <div className="card">
                                    <div className="card-header container-fluid">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h3 className="p-3">{book.title}</h3>
                                            </div>
                                            <div className="col-md-4">
                                            <button className="saveBook btn btn-light" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save
                                        </button>
                                        <a href={book.link} target="_blank" rel="noopener noreferrer">
                                            <button className="viewBook btn btn-dark">
                                                View
                                        </button>
                                        </a>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <div><h4 className="p-3">Written by {book.author}</h4></div>
                                    <div className="row">
                                        <div className="col-md-3">
                                        <img 
                    src ={book.image !== undefined? book.image: ''} 
                    alt = {book.title}
                    className = "bookImage p-3"
                    />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8">
                                        <p className="bookDescription">{book.description}</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                           </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default  Card


                        