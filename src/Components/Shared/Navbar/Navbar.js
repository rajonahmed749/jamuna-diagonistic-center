import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto ">
                    <li class="nav-item">
                    <Link className="nav-link ms-4 active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link ms-4" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ms-4" to="/dashboard">Dashboard</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link ms-4 " to="/blog">Blog</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link ms-4 " href="#">Contact Us</a>
                    </li>
                </ul>  
            </div>
        </div>
    </nav>
    );
};

export default Navbar;