import React, {useEffect, useState} from 'react'
import Spacer from './components/Spacer'
import Header from './components/Header'
import Cards from './components/Cards';
import Search from './components/Search';
import axios from "axios"


function BrowseProducts() {

    // Variable being used in the fetch request
     const [products, setProduct] = useState([]);

     // Fetch function for All the products
    const fetchProductInfo = () => {
        return axios.get("https://fakestoreapi.com/products")
            .then((response) => setProduct(
                response.data
            ));
    }

    // Call the fetch function and set it to products (inside the useState)
    useEffect(() =>{
        fetchProductInfo();
    }, [])


    return (
        <>

            <Header />

            {/*------- Browse Page of showing all the products ------- */}
            <h1 style={{margin: "10vh 0 0 50px"}}>Browse Products</h1>

            {/*------- Search Bar------- */}
            <div style={{marginLeft: '50px'}} >
                <Search />
            </div>

            <Spacer />

        {/*------- display all the products through looping through the products (a list of dictionaries) ------- */}
            <div className="row row-cols-3 g-3 mx-5" style={{margin: "0 5vw 0 5vw"}}>
                {
                    products.map(product => (
                        <Cards size={1}
                               image={product.image}
                               title={product.title}
                               price={product.price}
                               productId={product.id}
                        />
                        ))
                }
            </div>

            <Spacer />


        </>
    )
}

export default BrowseProducts;