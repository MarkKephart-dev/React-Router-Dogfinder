import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = ({dogs}) => {
    return (
        <nav className="NavBar">
            {dogs.map(dog => (
                <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            ))}
        </nav>
    )
}

export default NavBar;