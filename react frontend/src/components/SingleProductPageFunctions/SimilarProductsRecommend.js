import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../css/styles.css'
import axios from "axios";
import WideCards from "../CardsComponent/WideCards";
import SmallCards from "../CardsComponent/SmallCards"

const RecommendProductsDisplay = (category) => {
    // ----------------------------- Recommendation Product ----------------------------- //

    //To get category of the current item and recommend product with same category
    const [recProducts, setRecProduct] = useState(['something default']);

    const curr_category = JSON.stringify(category.category).replace(/["]+/g, '')

    const fetchRecProductInfo = () => {
        return axios.get(`https://fakestoreapi.com/products/category/${curr_category}/?limit=3`)
            .then((res) => setRecProduct(
                res.data
            ));
    }

    // Call the fetch function and set it to products (inside the useState)
    useEffect(() =>{
        fetchRecProductInfo(recProducts);
        //console.log(recProducts)
    }, []);

    // const [product, setProduct] = useState([])
    //     const fetchProductInfo = () => {
    //     fetch(`/getItemByCategory`,{
    //             'method':'POST',
    //              headers : {
    //             'Content-Type':'application/json'
    //       },
    //       body:JSON.stringify({"category": category, "limit": 3})
    //     })
    //     .then(response => (response.json()))
    //         .then((productData) => setProduct(productData))
    //     .catch(error => console.log(error))
	// }
    //
    //     useEffect(() =>{
    //     fetchProductInfo();
    //     }, []);

     //console.log("recProduct now: " +  JSON.parse(JSON.stringify(recProducts[0])).id)
    // recProducts.map(recProduct => ( console.log("Inside the map of reproduct" + {recProduct})))

    const formattedRecProduct = JSON.parse(JSON.stringify(recProducts))
     //console.log(formattedRecProduct)


    return (
            <div>
                <div className="row row-cols-3 g-3 mx-5" style={{margin: "0 5vw 0 5vw"}}>
                            {

                                formattedRecProduct.map(recProduct => (
                                                    <SmallCards
                                                               image={recProduct.image}
                                                               title={recProduct.title}
                                                               price={recProduct.price}
                                                               productId={recProduct.id}
                                                               category={recProduct.category}
                                                               discount = {recProduct['percent discount']}
                                                    />

                                )
                                )
                            }
                        </div>
            </div>

    )
}

export default RecommendProductsDisplay;