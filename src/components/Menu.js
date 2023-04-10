import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(props) {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-success">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">Music Player</NavLink>

                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/`} className="nav-link">Music</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/about`} className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu