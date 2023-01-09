import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import { Link } from 'react-router-dom'
//import cssStyle from "./css/styles.css"
import './style.css'
import axios from "axios"




function Home() {

    const [products, setProduct] = useState([]);
    const fetchData = () => {
        return axios.get("https://fakestoreapi.com/products/categories")
            .then((response) => setProduct(response.data));
    }

    const img_links=["https://static.swappa.com/static/images/categories/retro/category_iphones_600x600.png", "https://oceanside-jewelers.com/wp-content/uploads/2019/01/gold-reworked3-1024x768.jpg"]

    useEffect(() =>{
        fetchData();
    }, [])

    const items = [
        {id: 1, category: products[0], image: img_links[0]}
    ]

    return (
        <>
            <Header/>
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

        </>
    )
}

export default Home;