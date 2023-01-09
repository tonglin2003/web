import React from 'react'
import { Link } from 'react-router-dom'
import css from "../css/styles.css"

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" style={{borderBottom: "solid"}} id="nav">
                <Link class="navbar-brand" to="/"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" class="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" class="nav-link">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" class="nav-link">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/post"><button type="button" className="btn btn-primary">Post Product</button></Link>
                        </li>
                    </ul>
                    <div className="container-logo">
                        <img src="https://jwassets.justworks.com/assets/logos/og-logo-icon-37f2f3dec5838014e66c4ca492c2bed24e6f0119c8a9428e63c2bc5802f034f7.png" alt="Payroll, Benefits, HR Software, and Compliance | Justworks | Justworks" width="50" height="50"/>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header