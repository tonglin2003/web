import React, {useEffect, useState} from 'react'
import Spacer from './components/Spacer'
import Header from './components/WebHeaderAndFooter/Header'
import Cards from './components/Cards';
import {useParams} from "react-router-dom";
import HeaderImageDisplay from "./components/SingleProductPageFunctions/HeaderImageDisplay"
import Footer from "./components/WebHeaderAndFooter/Footer";
import {MDBContainer} from "mdb-react-ui-kit";


const CategorizeProductPage = () => {
    const { category } = useParams();
    const [products, setProduct] = useState([]);
    const [search, setSearch] = useState(false)
    const [query, setQuery] = useState("");

    function searchNow(val)
    {
        setQuery(val.target.value)
        setSearch(false);
    }

    // Fetching the product from the FLASK API
    const fetchProductInfo = () => {
        fetch(`/getItemByCategory`,{
                'method':'POST',
                 headers : {
                'Content-Type':'application/json'
          },
          body:JSON.stringify({"category": category})
        })
        .then(response => (response.json()))
            .then((productData) => setProduct(productData))
        .catch(error => console.log(error))
	}

        useEffect(() =>{
        fetchProductInfo();
        }, []);


    return (
        <>
            <Header />
            <HeaderImageDisplay/>



            {/*------- Search Bar------- */}

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
                                            <Cards size={1}
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
                                products.map(product => (<Cards size={1}
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
        </>
    )


}

export default CategorizeProductPage;