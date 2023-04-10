import React, { useState } from "react";

function Search(props) {
    // const [state,handler] = useState(value)
    const [artist,setArtist] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('artist =', artist)
        props.searchInfo(artist)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submitHandler} >
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="search" name="artist" id="artist" className="form-control" placeholder="Enter Artist Name" value={artist} onChange={(e) => setArtist(e.target.value)} required />
                                        <button type="submit" className="btn btn-outline-success">
                                            <i className="bi bi-search"></i>
                                        </button>
                                        <button type="reset" className="btn btn-outline-danger">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search