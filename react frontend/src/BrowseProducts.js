import React, {useEffect, useState} from 'react'
import Spacer from './components/Spacer'
import Header from './components/WebHeaderAndFooter/Header'
import WideCards from './components/CardsComponent/WideCards';
import axios from "axios"
import Footer from "./components/WebHeaderAndFooter/Footer";
import {Link} from "react-router-dom";
import HeaderImageDisplay from "./components/SingleProductPageFunctions/HeaderImageDisplay"

import {MDBContainer} from "mdb-react-ui-kit";

import "./css/card.css";


function BrowseProducts() {

    // ----------------------- Variable used in Search -------------------- //
    //Variable used in the searching function
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState(false)
    function searchNow(val)
    {
        setQuery(val.target.value)
        setSearch(false);
    }

    // ----------------------- Fetching for data in the flask json product file -------------------- //
      // Variable being used in the fetch request
    const [products, setProduct] = useState([]);


     // Fetch function for All the products
    useEffect(() => {
        fetch("/products")
        .then((res) => res.json())
        .then((productData) => {
            setProduct(productData);
        });
    }, []);



    return (
        <div>
            <Header />
            <HeaderImageDisplay/>


        <div style={{background:"#faf8f8"}}>
            {/*------- Search Bar------- */}
            <div >

                <div className="">
                    <input className={"ml-5 my-5 font"}
                           type="text"
                           placeholder="Search"
                           onChange={searchNow}
                           style={{margin: "0 3% 0 8%", minHeight:"3rem", width: "30vw"}}
                    />
                    <button className={"button-6"} onClick={ ()=> setSearch(true) }>Search</button>
                </div>

            <div>
                {
                    search?
                        // ------------ If user request for a search -----------
                        // filters through the products to see if it includes the search term
                           <MDBContainer fluid>
                            {
                                products.filter((product) =>
                                    {
                                        // returns true if product has the search term
                                        if (product.title.toLowerCase().includes(query))
                                        {
                                            // setItemFound()
                                            return product; //so we return this single product for later use
                                        }
                                    }
                                ).map((filteredProduct) =>
                                    (
                                        <>
                                            {/*{ console.log( "Type of filteredProject is: " + typeof filteredProduct ) }*/}
                                            <WideCards size={1}
                                                       image={filteredProduct.image}
                                                       title={filteredProduct.title}
                                                       price={filteredProduct.price}
                                                       discount = {filteredProduct['percent discount']}
                                                       productId={filteredProduct.id}
                                                       category = {filteredProduct.category}
                                                       description={filteredProduct.description}
                                            />
                                        </>
                                    ))
                            }

                        </MDBContainer>
                        // ----------- If there is no need for search ------------
                        :  <MDBContainer fluid>
                            {
                                products.map(product => (<WideCards size={1}
                                                                    image={product.image}
                                                                    title={product.title}
                                                                    price={product.price}
                                                                    discount = {product['percent discount']}
                                                                    productId={product.id}
                                                                    category = {product.category}
                                                                    description={product.description}
                                    />
                                    // category is working fine when used console.log

                                ))
                            }
                        </MDBContainer>
                }
            </div>





            <Spacer />


            <Spacer />


            </div>
        </div>
            <Footer/>
        </div>
    )
}

export default BrowseProducts;