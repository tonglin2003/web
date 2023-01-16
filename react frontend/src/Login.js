import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
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

    //User data from Backend
    const [userData, setUserData] = useState()

    //Local Storage
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
        const LoggedUser = JSON.parse(localStorage.getItem('currentUser'));
        if(LoggedUser && LoggedUser !== -1){
            navigateToDashboard();}
        else{
            event.preventDefault();} 
    }


    //-----------------------------------------------------------------------
    //           EXECUTIONS
    //-----------------------------------------------------------------------

    //Default current user is none (LOGGED OUT)------------------------------------
    useEffect(() => {
        localStorage.setItem('currentUser', -1);
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
        fetch("/userdata")
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

                <h1 style={{textAlign: "center"}}>Login</h1>
                
                {/* USERNAME INPUT */}
                <label>username</label><br></br>
                <input type="username" value={usernameInput} required style={{fontSize: "1.5rem", width: "100%", height:"50px"  }} 
                        onChange={(e) => setUsernameInput(e.target.value)}/><br></br><br></br>

                {/* PASSWORD INPUT */}
                <label>password</label><br></br>
                <input type="password" value={passwordInput} required style={{fontSize: "1.5rem", width: "100%", height:"50px"}} 
                        onChange={(e) => setPasswordInput(e.target.value)}/><br></br><br></br>

                <p style={{color: "red"}}>{invalidMessage}</p>
                
                <input type="submit" value="Login"  style={{maxWidth: "400px"}} 
                        onClick={()=> {CheckInput(userData, usernameInput, passwordInput)}}/><br></br><br></br>

            </form>
            </div>
            <Spacer />

            </div>

            <Footer />

        </>
    )
}

export default Login;

