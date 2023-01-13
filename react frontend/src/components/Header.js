import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import css from "../css/styles.css"

const Header = () => {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const [isLoggedin, setIsLoggedIn] = useState(false);
    
    console.log(currentUser);
    // console.log(isLoggedin);
    console.log("hi hi hi")
    
    //Check if logged in
    useEffect(() => {
        if(currentUser){
            if(currentUser !== -1){
                setIsLoggedIn(true)
            }
        }
    }, []);

    function Logout (){
        localStorage.setItem('currentUser', -1);
        currentUser = localStorage.getItem('currentUser');
        setIsLoggedIn(false);       
    }    

    return (
        <header>
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light " style={{borderBottom: "solid"}} id="nav">
                <div className={"container-fluid"}>
                <Link class=" navbar-brand" to="/"></Link>
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
                            <Link to="/post" style={{textDecoration: "none"}}><button type="button" className="button-6">Post Product</button></Link>
                        </li>
                    </ul>
                    <div className="container-logo">
                        {!(isLoggedin) && <Link to={'/login'} style={{textDecoration: "none"}} ><button>Sign Up</button></Link>}
                        &nbsp;&nbsp;&nbsp;
                        {!(isLoggedin) && <Link to={'/login'} style={{textDecoration: "none"}} >Login</Link>}
                        {isLoggedin && <Link to={'/'} style={{textDecoration: "none"}}
                                            onClick={ () => {Logout(); }} >Logout</Link>}
                        &nbsp;&nbsp;&nbsp;
                        <Link to={"/"}>
                            <a href={""}>
                                <img src="https://jwassets.justworks.com/assets/logos/og-logo-icon-37f2f3dec5838014e66c4ca492c2bed24e6f0119c8a9428e63c2bc5802f034f7.png" alt="Payroll, Benefits, HR Software, and Compliance | Justworks | Justworks" width="50" height="50" />
                            </a>
                        </Link>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header