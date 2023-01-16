import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import css from './css/styles.css'

function Login() {


    //-----------------------------------------------------------------------
    //           VARIABLES
    //-----------------------------------------------------------------------

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
        // else{
        //     event.preventDefault();} 
    }


    //-----------------------------------------------------------------------
    //           EXECUTIONS
    //-----------------------------------------------------------------------

    //Default current user is none (LOGGED OUT)------------------------------------
    useEffect(() => {
        localStorage.setItem('currentUser', -1);
        console.log('test')

    }, []);

    // //Sets username = current username (LOGGED IN)------------------------------------
    // useEffect(() => {
    //     const username = JSON.parse(localStorage.getItem('currentUser'));
    //     if(username){
    //         setUsername(username);
    //     }
    // }, []);

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
    
    // var currentUserData = userData[1]

    //var searchedUser = findUserByUsername(userData, userInput)

    // console.log((findUserByUsername(userData, "janedoe")).bio);

    ///-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------

    return (
        <>
            <Header />

            {/* <div> */}
                {/* {currentUserData.name} */}
                {/* {userData.map((user, i) => (
                    <h3 key={i}>{user.name}</h3>
                ))}
            </div> */}
       
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
                
                {/* <div className="row">
                    <div className="col" style={{display: "flex", justifyContent: "center"}}>
                        <input type="checkbox" className='form-check-input' style={{bottom:"8px", position: "relative", right:"3px"}}/>
                        <label> Remember me </label>
                    </div>
                    <div className="col" style={{display: "flex", justifyContent: "center"}}>
                        <a href="#!" style={{textDecoration: "none"}}>Forgot password?</a>
                    </div>
                </div> */}

                <input type="submit" value="Login"  style={{maxWidth: "400px"}} 
                        onClick={()=> {CheckInput(userData, usernameInput, passwordInput)}}/><br></br><br></br>
                        <div className="text-center">
                            <p>New to Justworks? <a style={{textDecoration: "none"}} href="#!">Get Started</a></p>
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

