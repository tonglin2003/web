import React, {useEffect, useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import Spacer from './components/Spacer'
import css from './css/styles.css'

function Login() {


    //-----------------------------------------------------------------------
    //           VARIABLES
    //-----------------------------------------------------------------------

    //------BUG:  DOES NOT REDIRECT TO DASHBOARD IF ALREADY LOGGED IN. WILL LOG OUT
    //Init user data from Backend
    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        if(user && user !== -1){
            navigateToDashboard();}    
    }, []);

    //----------------------------------------------------------------------------
 
    //User Input
    const [usernameInput, setUsernameInput] = useState();
    const [passwordInput, setPasswordInput] = useState();
    const [invalidMessage, setInvalidMessage] = useState();
    var inputUser;

    //Init user data from Backend
    const [userData, setUserData] = useState([]);

    //Init current user data from Frontend
    const [currentUser, setCurrentUser] = useState([]);

    // Redirect URL
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/dashboard');
    };

    //-----------------------------------------------------------------------
    //           FUNCTIONS
    //-----------------------------------------------------------------------

    function findUserByUsername(array, username){
        return array.find((e) => {
            return e.username === username;
        })
    }
    
    //Check if the login input is valid
    function CheckInput (array, username, password){
        inputUser = findUserByUsername(array, username)

        if(inputUser && inputUser.password && username && password){
            if(inputUser.password === password){
                Login(inputUser);
            }
        }
        else {
            setInvalidMessage("Invalid login. Please check your username or password.")}
    }

    function Login (inputUser){
        localStorage.setItem('currentUser', JSON.stringify(inputUser));
    }

    const LoginValidation = event =>{
        event.preventDefault();
        const LoggedUser = JSON.parse(localStorage.getItem('currentUser'));
        if(LoggedUser && LoggedUser !== -1){     
            navigateToDashboard();}
    }


    //-----------------------------------------------------------------------
    //           EXECUTIONS
    //-----------------------------------------------------------------------

    //Default current user is none (LOGGED OUT)------------------------------------
    useEffect(() => {
        localStorage.setItem('currentUser', -1);
    }, []);

    //Retrieve user data from the backend ------------------------------------
    useEffect(() => {
        fetch("/api/userdata")
        .then((res) => res.json())
        .then((userData) => {
            setUserData(userData);
            setLoading(false);
        });
    }, []);
    
    //DEBUG USER DATA (START)-----------------
    const [loading, setLoading] = useState(true);

    if(loading && !userData){
        return <p>Loading...</p>;
    }
    if(!loading && !userData){
        return <p>Opps. Something went wrong</p>;
    }
    //DEBUG USER DATA (END)-----------------
    
    ///-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------

    return (
        <>
            <Header />
       
            <div className='profile background'>
            <Spacer />
            <div  style={{justifyContent: "center", display: "flex"}}>
           

            <form className='profile contain' 
                    onSubmit={LoginValidation}>

                <h1 style={{textAlign: "center"}}>Welcome!</h1>
                <h1 style={{textAlign: "center"}}>Let's get started.</h1><br></br>
                
                {/* USERNAME INPUT */}
                <label>USERNAME</label><br></br>
                <input type="username" value={usernameInput} required style={{fontSize: "1.5rem", width: "100%", height:"50px"  }} 
                        onChange={(e) => setUsernameInput(e.target.value)}/><br></br><br></br>

                {/* PASSWORD INPUT */}
                <label>PASSWORD</label><br></br>
                <input type="password" value={passwordInput} required style={{fontSize: "1.5rem", width: "100%", height:"50px"}} 
                        onChange={(e) => setPasswordInput(e.target.value)}/><br></br><br></br>

                {invalidMessage && <p style={{color: "red"}}>{invalidMessage}</p>}

                <input type="submit" value="Login"  style={{maxWidth: "400px"}} 
                        onClick={()=> {CheckInput(userData, usernameInput, passwordInput)}}/><br></br><br></br>
                        <div className="text-center">
                            <p>New to Justworks? <Link style={{textDecoration: "none"}} to="/get-started">Get Started</Link></p>
                        </div><br></br><br></br>

            </form>
            </div>
            <Spacer />
            </div>
            <Footer />
        </>
    )
}

export default Login;

