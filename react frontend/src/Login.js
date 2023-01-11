import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'


function Login() {
    return (
        <>
            <Header />
            <Spacer />

            <div>
                <h1>Login Debug</h1>
                <Spacer />

                <h4>Choose an Account</h4>
                <br></br><br></br>
                <button onclick="">Jane Doe</button>
                <br></br><br></br>
                <button onclick="">John Smith</button>

            </div>

            <Spacer />
            <Footer />

        </>
    )
}

export default Login;

