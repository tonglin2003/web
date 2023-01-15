import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import css from "../../css/styles.css"

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
            <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light " style={{borderBottom: "solid" ,borderBlockColor:"whitesmoke"}} id="nav">
                <div className={"container-fluid"}>
                <Link class=" navbar-brand" to="/"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" style={{padding:"10px",paddingBottom:"15px"}}>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" class="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/browse" class="nav-link">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/post" class="nav-link">Post Product</Link>
                        </li>
                        <li className="nav-item">
                            {/*<Link to="/post" style={{textDecoration: "none"}}><button type="button" className="button-6">Post Product</button></Link>*/}
                        </li>
                    </ul>
                    <Link to={"/"}>
                            <a href={""}>
                                <img src="https://i.ibb.co/hDrmxS9/Logo.png" alt="Payroll, Benefits, HR Software, and Compliance | Justworks | Justworks" width="195vw" height="35vw" />
                            </a>
                        </Link>
                    <div className="container-logo" style={{margin: "auto 3%"}}>
                        {!(isLoggedin) && <Link to={'/login'} id="getstartedbutton" style={{textDecoration: "none", padding:"20px"}}>Get Started</Link>}
                        &nbsp;&nbsp;&nbsp;
                        {!(isLoggedin) && <Link to={'/login'} id="theloginbutton" >Login</Link>}
                        {isLoggedin && <Link to={'/'} style={{textDecoration: "none"}}
                                            onClick={ () => {Logout(); }} >Logout</Link>}
                        &nbsp;&nbsp;&nbsp;

                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header