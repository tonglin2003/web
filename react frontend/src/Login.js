import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import css from './css/styles.css'

function Login() {

    //Default current user is none (LOGGED OUT)------------------------------------
    const [currentUser, setCurrentUser] = useState("");
    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);

    //Setting username = current user (LOGGED IN)------------------------------------
    const [username, setUsername] = useState();
    useEffect(() => {
        const username = JSON.parse(localStorage.getItem('currentUser'));
        if(username){
            setUsername(username);
        }
    }, []);

    //Retrieve user data from the backend ------------------------------------
    const [userData, setUserData] = useState()
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

    console.log(userData);
    if(loading && !userData){
        return <p>Loading...</p>;
    }
    if(!loading && !userData){
        return <p>Opps. Something went wrong</p>;
    }
    //DEBUG USER DATA (END)-----------------

    //------------------------------------------------------------------------
    
    var currentUserData = userData[1]

    return (
        <>
            <Header />

            <div>
                {currentUserData.name}
                {userData.map((user, i) => (
                    <h3 key={i}>{user.name}</h3>
                ))}
            </div>
       
       
            <div className='profile background'>
            <Spacer />
            <div  style={{justifyContent: "center", display: "flex"}}>
           

            <form className='profile contain'>
                <h1 style={{textAlign: "center"}}>Login</h1>
                <label>username</label><br></br>
                <input type="username" required style={{fontSize: "1.5rem", width: "100%", height:"50px"}}/><br></br><br></br>

                <label>password</label><br></br>
                <input type="password" required style={{fontSize: "1.5rem", width: "100%", height:"50px"}}/><br></br><br></br>
                
                <input type="submit" value="Login" style={{maxWidth: "400px"}}/><br></br><br></br>

            </form>
            </div>
            <Spacer />

            </div>

            <Footer />

        </>
    )
}

export default Login;

