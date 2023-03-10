import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import UpdateUserData from './components/UserData/UpdateUserData'
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import Spacer from './components/Spacer'
import css from './css/styles.css'
import Login from './Login'

function SignUp(){
    //-----------------------------------------------------------------------
    //           VARIABLES
    //-----------------------------------------------------------------------

    //REDIRECT TO DASHBOARD IF ALREAD LOGGED IN---------------
    const user = JSON.parse(localStorage.getItem('currentUser'));

    useEffect(() => {
        if(user && user !== -1){
            navigateToDashboard();}    
    }, []);
    //REDIRECT TO DASHBOARD IF ALREAD LOGGED IN---------------

    //Saved variables
    const [userData, setUserData] = useState([]);
    const [dataLength, setDataLength] = useState(userData.length)
    const [LoggedUser, setLoggedUser] = useState(0);

    //User Input
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState();
    const [confirmPasswordInput, setConfirmPasswordInput] = useState();
    const [nameInput, setNameInput] = useState();
    const [phoneInput, setPhoneInput] = useState();
    const [emailInput, setEmailInput] = useState();

    //messages to the user on valid input
    const [invalidPasswordMessage, setInvalidPasswordMessage] = useState();
    const [invalidUsernameMessage, setInvalidUsernameMessage] = useState();
    const [validUsernameMessage, setValidUsernameMessage] = useState();

    // Redirect URL
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/dashboard')
    }

    //upload new user to the server
    const uploadInfo = ()=>{
        UpdateUserData.NewUser({usernameInput, passwordInput, nameInput, phoneInput, emailInput})
        .then((response) =>  {return response})
        .catch(error => console.log('error',error))
    }

    //-----------------------------------------------------------------------
    //           FUNCTIONS
    //-----------------------------------------------------------------------
    //Disallow submit if error messages are showing. Else sign up
    function validateSignUp(){
        if(invalidPasswordMessage ||invalidUsernameMessage ){
            return
        }
        else{
            uploadInfo()
            setLoggedUser(1);
        }
    }

    function findUserByUsername(array, username){
        return array.find((e) => {
            return e.username === username;
        })
    }

    //-----------------------------------------------------------------------
    //           EXECUTIONS
    //-----------------------------------------------------------------------
    // Redirect to DASHBOARD if logged in
    useEffect(() => {
        if(LoggedUser === 1){
            if(userData.length > dataLength){
                const loginUser = findUserByUsername(userData, usernameInput)
                localStorage.setItem('currentUser', JSON.stringify(loginUser))
                navigateToDashboard();
            }
        }
        if(LoggedUser === 1){
        }
        setDataLength(userData.length)
    }, [userData.length])

    //Retrieve user data from the backend ------------------------------------
    useEffect(() => {
        fetch("/api/userdata")
        .then((res) => res.json())
        .then((userData) => {
            setUserData(userData);
            setLoading(false);
        })
    });

    //check if username has been taken
    useEffect(() => {
        var matchFound = false
        if(usernameInput.length < 1){
            setInvalidUsernameMessage(null)
            setValidUsernameMessage(null)
        }
        userData.map((user) => {
            if(user.username === usernameInput && usernameInput){
                matchFound = true
                setValidUsernameMessage(null)
                setInvalidUsernameMessage("This username is not available")
                return
            }
            else if (user.username !== usernameInput && usernameInput && !matchFound) {
                setInvalidUsernameMessage(null)
                setValidUsernameMessage("This username is available.")
                return
            }
        })
    }, [usernameInput]);

    //check if password is same as confirm password
    useEffect(() => {
        if(confirmPasswordInput && confirmPasswordInput !== passwordInput){
            setInvalidPasswordMessage("Your password does not match. Try again.")
        }
        else{
            setInvalidPasswordMessage()
        }
    }, [confirmPasswordInput]);

    //DEBUG USER DATA (START)-----------------
    const [loading, setLoading] = useState(true);

    if(loading && (!userData || userData.length < 1)){
        return <p>Loading...</p>;
    }
    if(!loading && (!userData || userData.length < 1)){
        return <p>Opps. Something went wrong</p>;
    }
    //DEBUG USER DATA (END)-----------------

    ///-----------------------------------------------------------------------
    //           RETURN
    //-----------------------------------------------------------------------
    return(
        <>
            <Header />       
            <div style={{backgroundColor: "#fff6bd"}}>
            <Spacer />
            <div  style={{justifyContent: "center", display: "flex"}}>
           
            <form className='profile contain' style={{boxShadow: "5px 5px 5px #d8cf94"}}>

                <h1 style={{textAlign: "center"}}>Get Started with Justworks.</h1>
                <p style={{textAlign: "center"}}>Together, we'll build a program that works for your business. Already have an account? <Link to="/login" style={{textDecoration: "none"}}>Sign in</Link>.</p><br></br>
                
                <hr></hr>
                <h3>Tell us about yourself</h3><br></br>
                {/* NAME INPUT */}
                <label>COMPANY NAME <span style={{color: "red"}}>*</span></label><br></br>
                <input type="name" required style={{fontSize: "1.5rem", width: "100%", height:"50px"  }} 
                        onChange={(e) => setNameInput(e.target.value)}/><br></br><br></br>

                {/* PHONE INPUT */}
                <label>PHONE NUMBER <span style={{color: "red"}}>*</span></label><br></br>
                <input type="tel" required style={{fontSize: "1.5rem", width: "100%", height:"50px"  }} 
                        onChange={(e) => setPhoneInput(e.target.value)}/><br></br><br></br>

                {/* EMAIL INPUT */}
                <label>EMAIL ADDRESS <span style={{color: "red"}}>*</span></label><br></br>
                <input type="email" required style={{fontSize: "1.5rem", width: "100%", height:"50px"  }} 
                        onChange={(e) => setEmailInput(e.target.value)}/><br></br><br></br>
                <br></br>

                <h3>Choose a...</h3><br></br>

                {/* USERNAME INPUT */}
                <label>USERNAME <span style={{color: "red"}}>*</span></label><br></br>
                <input type="username" required style={{fontSize: "1.5rem", width: "100%", height:"50px"  }} 
                        onChange={(e) => setUsernameInput(e.target.value)}/><br></br><br></br>

                {invalidUsernameMessage && <p style={{color: "red"}}>{invalidUsernameMessage}</p>}
                {validUsernameMessage && <p style={{color: "green"}}>{validUsernameMessage}</p>}

                {/* PASSWORD INPUT */}
                <label>PASSWORD <span style={{color: "red"}}>*</span></label><br></br>
                <input type="password" required style={{fontSize: "1.5rem", width: "100%", height:"50px"}} 
                        onChange={(e) => setPasswordInput(e.target.value)}/><br></br><br></br>
                
                <label>CONFIRM PASSWORD <span style={{color: "red"}}>*</span></label><br></br>
                <input type="password" required style={{fontSize: "1.5rem", width: "100%", height:"50px"}} 
                        onChange={(e) => setConfirmPasswordInput(e.target.value)}/><br></br><br></br>

                {invalidPasswordMessage && <p style={{color: "red"}}>{invalidPasswordMessage}</p>}

                <div className="col">
                        <input type="checkbox" style={{position: "relative", right:"3px"}}/>
                        <label> Sign up for the Justworks Newsletter </label>
                </div>
                <div className="col">
                        <input type="checkbox" required style={{position: "relative", right:"3px"}}/>
                        <label> Agree to Our Terms of Services <span style={{color: "red"}}>*</span></label>
                </div>

                <br></br>
                
                <input onClick={(e)=> {e.preventDefault(); validateSignUp()}} type="button" value="Sign Up"  style={{maxWidth: "400px"}}  className="profile center button-6"/><br></br>

            </form>
            </div>
            <Spacer />
            </div>
            <Footer />

        </>

    )
}
export default SignUp