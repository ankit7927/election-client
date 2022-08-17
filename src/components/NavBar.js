import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {

    return (
        <header >
            <div >
                <Link to="/" >
                    <h2>SLRTCE Voting Portal</h2>
                </Link>
                <nav>
                    <Link to="/election" class="mr-5 hover:text-gray-900">Elections</Link>
                    <Link to="#" class="mr-5 hover:text-gray-900">Results</Link>
                    <Link to="#" class="mr-5 hover:text-gray-900">About Us</Link>
                    <Link to="/profile" >Profile</Link>
                </nav>

            </div>
            <hr />
        </header>
    )
}

export default NavBar