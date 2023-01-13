import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css'
import axios from "axios";
import Cards from "./Cards";

const RecommendProductsDisplay = (product) => {
    // ----------------------------- Recommendation Product ----------------------------- //

    //To get category of the current item and recommend product with same category
    const [recProducts, setRecProduct] = useState(['something default']);

    console.log(product)
    console.log("from the recproduct, the input product is: " + JSON.stringify(product.product.category))

    const category = JSON.stringify(product.product.category).replace(/["]+/g, '')
    const productId = JSON.stringify(product.product.id)

    console.log("I'm category: " + category)

    console.log(`https://fakestoreapi.com/products/category/${category}/?limit=3`)
    const fetchRecProductInfo = () => {
        return axios.get(`https://fakestoreapi.com/products/category/${category}/?limit=4`)
            .then((res) => setRecProduct(
                res.data
            ));
    }

    // Call the fetch function and set it to products (inside the useState)
    useEffect(() =>{
        fetchRecProductInfo(recProducts);
        //console.log(recProducts)
    }, []);

     console.log("recProduct now: " + recProducts)
    // recProducts.map(recProduct => ( console.log("Inside the map of reproduct" + {recProduct})))

    return (
            <div>
                <div className="row row-cols-3 g-3 mx-5" style={{margin: "0 5vw 0 5vw"}}>
                            {

                                recProducts.map(recProduct => (
                                                    <Cards size={1}
                                                image={recProduct.image}
                                                title={recProduct.title}
                                                price={recProduct.price}
                                                productId={recProduct.id}/>

                                )
                                )
                            }
                        </div>
            </div>

    )
}

export default RecommendProductsDisplay