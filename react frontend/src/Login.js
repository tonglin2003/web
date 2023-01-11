import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import css from './css/styles.css'



function Login() {
    return (
        <>
            <Header />
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

