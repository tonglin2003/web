import React from 'react'
import { Link } from 'react-router-dom'
import css from "../css/styles.css"

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light" style={{borderBottom: "solid"}} id="nav">
                <Link class="navbar-brand" to="/"></Link>
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
                    <div class="container-logo">
                        <img src="https://jwassets.justworks.com/assets/logos/og-logo-icon-37f2f3dec5838014e66c4ca492c2bed24e6f0119c8a9428e63c2bc5802f034f7.png" alt="Payroll, Benefits, HR Software, and Compliance | Justworks | Justworks" width="50" height="50"/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header