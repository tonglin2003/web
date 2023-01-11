import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css'
import axios from "axios";

const SingleProductDisplay = (productId) => {
    // return LargeCard design and has param of productId to fetch specific product from the API
    //  JSON.stringify is to convert productId to a dictionary that can be used in codes
    return (<LargeCard productId={ JSON.stringify(productId.productId) }/>)
}

const LargeCard = ({productId}) => {
    // Setting productId to fetch data from the Fake Store API
    const [product, setProduct] = useState({});


    // Fetch the product by the product ID, returns a json/dictionary of data info
    const fetchProductInfo = () => {
        return axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => setProduct(
                response.data
            ));
    }

    // Calling the function and if failed then return []
    useEffect(() =>{
        fetchProductInfo();
    }, [])

    console.log(`From the large cards: ${product['title']}`)

    // Return the website with the fetched data
    return(
    <>
            <div className="container" id="theBack">
                <div className="row">
                      <div className="col-sm">
                         <div className="card">
                            <img src ={product['image']}
                                 className="card-img-top"
                                 id="braceleting"
                                 alt={ product['title'] } />
                        </div>
                    </div>


        <div className="col-sm">
            <p id="theBracelet">{ product['title'] }</p>
            {/*<div id="diff">Color: Silver</div>*/}
            {/*<div id="diff">Material: Zinc Alloy</div>*/}
            {/*<div id="diff">Details:	Dragon</div>*/}
            {/*<div id="diff">Style: Fashionable </div>*/}

            <div id ="Colors"> Available sizes: </div>
            <button type="button" className="btn btn-light" id="Onesize">One size</button>

            {/*<button type="button" className="btn btn-secondary">Silver</button>*/}
            {/*<button type="button" className="btn btn-success">Green</button>*/}
            {/*<button type="button" className="btn btn-danger">Red</button>*/}
            {/*<button type="button" className="btn btn-warning">Yellow</button>*/}
            {/*<button type="button" className="btn btn-info">Blue</button>*/}

                        <p id="costofbracelet"> ${ product['price'] } </p>

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
        </>
    )
}
export default SingleProductDisplay