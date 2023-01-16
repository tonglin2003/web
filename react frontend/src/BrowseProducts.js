import React, {useEffect, useState} from 'react'
import Spacer from './components/Spacer'
import Header from './components/WebHeaderAndFooter/Header'
import Cards from './components/Cards';
import axios from "axios"
import Footer from "./components/WebHeaderAndFooter/Footer";


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


            {/*------- Search Bar------- */}
            <div style={{margin: "0 4rem 0 4rem"}}>

            <div>
                <input className={"ml-5 my-5"}
                       type="text"
                       placeholder="Search"
                       onChange={searchNow}
                       style={{margin: "0 3% 0 5%", minHeight:"3rem", width: "30vw"}}
                />
                <button className={"button-6"} onClick={ ()=> setSearch(true) }>Search</button>
            </div>


            <div>
                {
                    search?
                        // ------------ If user request for a search -----------
                        // filters through the products to see if it includes the search term
                        <div className="browse-cards row col-md" style={{margin: "0 5vw 0 5vw"}}>
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
                                            <Cards size={1}
                                                   image={filteredProduct.image}
                                                   title={filteredProduct.title}
                                                   price={filteredProduct.price}
                                                   discount = {filteredProduct['percent discount']}
                                                   productId={filteredProduct.id}
                                                   category = {filteredProduct.category}
                                            />
                                        </>
                                    ))
                            }

                        </div>
                        // ----------- If there is no need for search ------------
                        : <div className="browse-cards row col-md" style={{margin: "0 5vw 0 5vw"}}>
                            {
                                products.map(product => (<Cards size={1}
                                                                image={product.image}
                                                                title={product.title}
                                                                price={product.price}
                                                                discount = {product['percent discount']}
                                                                productId={product.id}
                                                                category = {product.category}
                                    />
                                    // category is working fine when used console.log

                                ))
                            }
                        </div>
                }
            </div>


            <Spacer />


            <Spacer />



        </div>
            <Footer/>
        </div>
    )
}

export default BrowseProducts;