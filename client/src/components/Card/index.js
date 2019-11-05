import React from 'react'

 const Card = props =>  {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <h3>Search Results</h3>
                    {props.books.map(book => {
                        return(
                           <div className="card-body">
                                <li key={book.id} className="list-group-item">
                                <div className="card">
                                    <div className="card-header container-fluid">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h3 className="p-3">{book.title}</h3>
                                            </div>
                                            <div className="col-md-4">
                                            <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save
                                        </button>
                                        <a href={book.link} target="_blank">
                                            <button className="viewBook btn btn-success">
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
                    alt = "book image"
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

{/* <a href ={infoLink}
                        target = "_blank"
                        key={i} className = "book">
                        <img 
                        src ={imageLinks !== undefined? imageLinks.thumbnail : ''} 
                        alt = "book image"
                        className = "bookImage"
                        />
                        <div className = "titleText">{title }</div>

                        </a> */}
                        