import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" class="navbar-brand">Justworks Market</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Technology</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Pricing</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/post"><button type="button" class="btn btn-primary">Post Product</button></Link>
                    </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}
export default Header