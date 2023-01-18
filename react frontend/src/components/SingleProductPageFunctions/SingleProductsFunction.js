import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../../css/styles.css'
import axios from "axios";
import WideCards from "../CardsComponent/WideCards";
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

    const fetchProductInfo = () => {
        fetch(`/getItemById`,{
                'method':'POST',
                 headers : {
                'Content-Type':'application/json'
          },
          body:JSON.stringify({"id": productId} )
        })
        .then(response => (response.json()))
            .then((productData) => setProduct(productData[0]))
        .catch(error => console.log(error))
	}

    // Calling the function and if failed then return []
    useEffect(() =>{
        fetchProductInfo();
    }, [])



    // Return the website with the fetched data
    return(
    <>
            <div className="container" id="theBack">
                <div className="row">
                      <div className="col-sm my-auto" >
                         <div className="card">
                            <img src ={product['image']}
                                 className="card-img-top p-3"
                                 alt={ product['title'] } />
                        </div>
                          <div className="text-center">
                              <p className="font" style={{fontSize: "1vw", margin: "0"}}>Learn more about the Company: </p>
                              <Link to="/briefbio">
                                <img src={product['company']} className="w-25"/>
                              </Link>
                          </div>
                    </div>


        <div className="col-sm">
            <h1  className={"title_font"} style={{fontSize: "2vw"}}>{ product['title'] }</h1>

            <div className={"font"} style={{fontSize: "1.3vw"}}>
                <span className={"fw-bold"}>Description: </span>
                {product.description}
            </div>

                        { (Number(product['percent discount']) > 0)?
                            <div className="card-text font fw-bold mt-3">
                                <span style={{color: "#983a3a"}}>
                                    ${ (Number(product['price']) * (1-(Number(product['percent discount']))/100)).toFixed(2)}
                                </span>
                                <span style={{fontSize: "1vw", opacity:"50%"}}>
                                    <del className="m-3">${Number(product['price']).toFixed(2)}</del>
                                </span>
                            </div>
                            :
                            <div className="card-text font fw-bold mt-3">
                                    <p className="font">${Number(product['price']).toFixed(2)}</p>
                            </div>
                        }

                        <div className="d-grid gap-2 mt-3">
                            <button className="button-6" type="button" id="addtobag" style={{background:"#1e6094"}}>Buy Now </button>
                            <button className="button-6" type="button" id="addtobag" style={{background:"#1e6094"}}>Add to bag</button>
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