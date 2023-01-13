import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css'
import axios from "axios";
import Cards from "./Cards";
//import RecommendProductsDisplay from './RecommendProducts'

const SingleProductDisplay = (productId) => {
    // return LargeCard design and has param of productId to fetch specific product from the API
    //  JSON.stringify is to convert productId to a dictionary that can be used in codes
    return (<LargeCard productId={ JSON.stringify(productId.productId) }/>)
}



const LargeCard = ({productId}) => {
// ----------------------------- Large Card Display ----------------------------- //
    // Setting productId to fetch data from the Fake Store API
    const [product, setProduct] = useState({});

    // Fetch the product by the product ID, returns a json/dictionary of data info
    const fetchProductInfo = () => {
        return axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => setProduct(
                response.data
            ));
    }
    console.log(`https://fakestoreapi.com/products/${productId}`)

    // Calling the function and if failed then return []
    useEffect(() =>{
        fetchProductInfo();
    }, [])

    console.log("Inside singleproductfunction, the product is: " + JSON.stringify(product))



    // Return the website with the fetched data
    return(
    <>
            <div className="container" id="theBack">
                <div className="row">
                      <div className="col-sm">
                         <div className="card">
                            <img src ={product['image']}
                                 className="card-img-top p-3"
                                 id="braceleting"
                                 alt={ product['title'] } />
                        </div>
                    </div>


        <div className="col-sm">
            <h1  className={"title_font"} style={{fontSize: "3vw"}}>{ product['title'] }</h1>

            <div className={"font"} >
                <span className={"fw-bold"}>Description: </span>
                {product.description}
            </div>


                        <p className={"title_font m-3"} style={{fontSize: "3vw"}}> ${ Number(product['price']).toFixed(2) } </p>

                        <div className="d-grid gap-2">
                            <button className="button-6" type="button" id="addtobag" style={{background:"black"}}>Buy Now </button>
                            <button className="button-6" type="button" id="addtobag" style={{background:"black"}}>Add to bag</button>
                            <p id="prodMeasurement"> Product Measurements </p>
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">Size</th>
                                    <th scope="col">one-size</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Diameter</td>
                                    <td>2.6in | 6.5cm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                 </div>
             </div>


        {/*/!*Rec item put here!*!/*/}
        {/*<RecommendProductsDisplay product={product}/>*/}







        </>
    )
}
export default SingleProductDisplay