import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'

function Home() {
    return (
        <>
            <Header />
            <Spacer />

            <div class="p-5 text-center " id="back">
                <h1 class="mb-2">JUSTWORKS</h1> <br></br>
                <h4 class="mb-3">Our mission is to help entrepreneurs and businesses grow with confidence. We do this with a simple and friendly platform, expert <br></br>
                    <br></br>
                    support from real people when it’s needed, and access to corporate-level benefits that ensure people feel secure and valued.
                </h4>
                <br></br>
                <Link class="btn btn-primary" to="" role="button"> Log In </Link>
                <Link class="btn signup" to="" role="button" id="signUp"> Sign Up </Link>

            </div>
            
            <Spacer />
            <Footer />

        </>
    )
}

export default Home;