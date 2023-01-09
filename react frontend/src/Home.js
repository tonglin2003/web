import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import { Link } from 'react-router-dom'
//import cssStyle from "./css/styles.css"
import './style.css'

function Home() {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("/main").then(
    //         res => res.json()
    //     ).then (
    //         data => {
    //             setData(data)
    //             console.log(data)
    //         }
    //     )
    //     }
    // )

    item = fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

    console.log(item)

    return (
        <>
            <Header />
            <div className="p-5 text-center" id="home_head">
                <h1 className="title_font mb-5 fw-bold">
                    JUSTWORKS
                </h1>
                <h4 className="font m-5 fw-bolder">Our mission is to help entrepreneurs and businesses grow with
                    confidence. We do this with a simple and friendly platform, expert support from
                    real people when it’s needed, and access to corporate-level benefits that ensure
                    people feel secure and valued.
                </h4>
                <br></br>
                <Link class="btn btn-primary" to="" role="button"> Log In </Link>
                <Link class="btn signup" to="" role="button" id="signUp"> Sign Up </Link>

            </div>

            <p>Going to put categories here!</p>
        </>
    )
}

export default Home;