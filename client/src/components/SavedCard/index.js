import React from 'react'

const SavedCard = (props) => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body">
                <div className="card-header">
                    <h3>Books You Have Saved</h3>
                    {props.savedBooks.map(savedbook => {
                        return(
                            <li key={savedbook._id} className="list-group-item">
                                <div className="card">
                                    <div className="card-header container-fluid">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <h3 className="p-3">{savedbook.title}</h3>
                                            </div>
                                            <div className="col-md-4">
                                            <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete
                                    </button>
                                    <a href={savedbook.link} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View
                                        </button>
                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <div><h4 className="p-3">Written by {savedbook.author}</h4></div>
                                    <div className="row">
                                        <div className="col-md-3">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-8">
                                        <p className="bookDescription">{savedbook.description}</p>
                                        </div>
                                    </div>
                                </div>

                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SavedCard