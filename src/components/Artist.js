import React from 'react'
import { NavLink } from 'react-router-dom'

function Artist(props) {
    const { id, name, images, type, popularity, genres } = props.info
    return (
        <div className="col-md-6 col-lg-4 col-sm-8 offset-lg-4 offset-md-3 offset-sm-2">
            <div className="card mt-3 mb-2">
                <img src={images ? images[0].url: ""} alt="no image" className="card-img-top" />
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h5 className="text-success text-center"> { name } </h5>
                        </li>
                        <li className="list-group-item">
                            <strong>Type</strong>
                            <span className="float-end text-success"> {type} </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Popularity</strong>
                            <span className="float-end text-success"> {popularity}% </span>
                        </li>
                        <li className="list-group-item">
                            <strong>Genres</strong>
                            <span className="float-end text-success"> {genres} </span>
                        </li>
                    </ul>
                </div>
                <div className="card-footer">
                    <NavLink to={`/tracks/artist/${id}`} className="btn btn-outline-success">Load Tracks</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Artist