import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import css from "../../css/styles.css"

const Header = () => {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const [isLoggedin, setIsLoggedIn] = useState(false);
    
    //Check if logged in
    useEffect(() => {
        if(currentUser && currentUser !== -1){
            setIsLoggedIn(true)
        }
    }, []);

    function Logout (){
        localStorage.setItem('currentUser', -1);
        currentUser = localStorage.getItem('currentUser');
        setIsLoggedIn(false);       
    }    

    return (
        <div id="darkmodes">
        <header>
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light " style={{borderBottom: "solid" ,borderBlockColor:"whitesmoke"}} id="nav">
                <div className={"container-fluid"}>
                <Link className=" navbar-brand" to="/"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{padding:"10px",paddingBottom:"15px"}}>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/policy" class="nav-link">Policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/browse" class="nav-link">Shop</Link>
                        </li>

                        <li className="nav-item">
                            {isLoggedin?
                                <Link to="/post" target="_blank" class="nav-link">Post Product</Link>
                                :
                                <Link to="/login" target="_blank" class="nav-link">Post Product</Link>
                            }
                        </li>
                    </ul>

                    {/* DARK MODE BUTTON */}
                    {/*<input type="checkbox" id="darkmode-toggle"/>*/}
                    {/*<label htmlFor="darkmode-toggle"/>*/}
                    {/*<div className="background"></div>*/}

                    {/* END OF DARK MOVE BUTTON */}




                    <Link to={"/"}>
                            <a href={""}>
                                <img src="https://i.ibb.co/hDrmxS9/Logo.png" alt="Payroll, Benefits, HR Software, and Compliance | Justworks | Justworks" width="231vw" height="35vw" style={{paddingRight:"29px"}} />
                            </a>
                        </Link>
                    <div className="container-logo" style={{margin: "auto 3%"}}>
                         {(isLoggedin) && <Link to={'/dashboard'} id="thedashboardbutton" >Dashboard</Link>}
                        {!(isLoggedin) && <Link to={'/get-started'} id="getstartedbutton" style={{textDecoration: "none", padding:"20px"}}>Get Started</Link>}
                        &nbsp;&nbsp;&nbsp;
                        {!(isLoggedin) && <Link to={'/login'} id="theloginbutton" >Login</Link>}
                        {isLoggedin && <Link to={'/'} id="logoutbutton"
                                            onClick={ () => {Logout(); }} >Logout</Link>}


                        &nbsp;&nbsp;&nbsp;

                    </div>
                    </div>
                </div>
            </nav>
        </header>
        </div>
    )
}
export default Header