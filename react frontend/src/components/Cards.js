<<<<<<< Updated upstream
import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../css/styles.css'


const Cards = ({size, image, title, price, productId}) => {
    /**
     * size (int, Required): from 1 to 3 to decide size
     * Image: (string, Optional): Link or directory to the product image
     * title: (string, optional): Title/name of the product
     * productId: (int, required only if size=1): productId to decide which product to be show on
     * Product demonstration page when the product is being clicked
    * */


    if(size === 1){ return <SmallCard image = {image}
                                      title={title}
                                      price={price}
                                      productId={productId}
    /> }
    else if(size === 2){ return <MediumCard image = {image} title={title} price={price} />}
    else if (size === 4) {return <BioCard image ={image} title={title} price={price} /> }

}

const SmallCard = ({image, title, price, productId}) => {

    return(
        <>
            <div className="col-md-4 col-sm-6 col-xs-6 d-block mx-auto">
                <div className="card px-5 text-center position-relative">
                    <Link to={`/product/${productId}`}
                          className="card text-center position-relative"
                          style={{border: "none"}}
                    >
                        <img src={image} className="card-img-top d-block mx-auto overflow-auto" alt="Los Angeles Skyscrapers" />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text">${price}</p>
                        <div className="col text-center">
                            <div className="col text-center">
                                <Link to="/" class="button-6" style={{fontSize: "1.5vw"}}>Add to cart</Link>
=======
import React from 'react'
import { Link } from 'react-router-dom'
import CSS from '../css/hafeefa.css'

var image = "";
const Cards = ({ size, image }) => {
    if (image === 1) { image = 'https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp' }
    else if (image === 2) { image = 'https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp' }
    else if (image === 3) { image = 'https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp' }
    else if (image === 4) { image = 'https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp' }

    if (size === 1) { return <SmallCard image={image} /> }
    else if (size === 2) { return <MediumCard image={image} /> }
    else if (size === 3) { return <LargeCard image={image} /> }
}

const LargeCard = ({ image }) => {
    return (
    <>
            <div class="col text-center">

                <h1 id="h1">Write the product / subscription name here</h1>

                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="card" style={{ width: "45rem" }}>

                                <img src={image} class="card-img-top"
                                    alt="Hollywood Sign on The Hill" /> 
                                     <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
>>>>>>> Stashed changes
                            </div>
                        </div>
                    </div>
                </div>
<<<<<<< Updated upstream
            </div>
        </>
    )
}




const MediumCard = ({image, title, price}) => {
    return(
        <>
            {/* <div className="col-sm"> */}
                <div className="card">
                    <img src={image} className="card-img-top" alt="Palm Springs Road" />
                    <div className="card-body">
                    <p className="card-title">{title}</p>
                        <p className="card-text">${price}</p>
                        <div className="col text-center">
                            <Link to="/" class="btn btn-primary">Purchase</Link>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}



const BioCard = ({image, title, price}) => {
    return(
        <>
            <div className="">
                <div className="card medium profile products">
                    <img src={image} className="card-img-top profile center" alt="Palm Springs Road" />
                    <div className="card-body">
                    <p className="card-title medium">{title}</p>
                        <p className="card-text">${price}</p>
                        <div className="col text-center">
                            <Link to="/" class="btn btn-primary">Purchase</Link>
=======


                    <div class="col text-center" id="tables">
                        <p id="prodName"> (product name) </p>

                        <div class="col-sm">
                            <ul class="list-group" id="cards">
                                <li class="list-group-item">Previously owned </li>
                                <li class="list-group-item">Length: 10.25in / 26cm </li>
                                <li class="list-group-item">Height: 6.25in / 16cm</li>
                                <li class="list-group-item">Slip pocket, Patch interior pockets</li>
                                <li class="list-group-item">Fold-over flap with turn lock closure</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </>
            )
}

            const MediumCard = ({image}) => {
    return(
            <>
                <div className="col-sm">
                    <div className="card">
                        <img src={image} className="card-img-top" alt="Palm Springs Road" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                This is a longer card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </p>
                            <div className="col text-center">
                                <Link to="/" class="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
}

            const SmallCard = ({image}) => {
    return(
            <>
                <div class="col-sm">
                    <div class="card">
                        <img src={image} class="card-img-top" alt="Los Angeles Skyscrapers" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                                additional content.</p>
                            <div class="col text-center">
                                <div class="col text-center">
                                    <Link to="/" class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
>>>>>>> Stashed changes
                        </div>
                    </div>
                </div>
            </>
            )
}

<<<<<<< Updated upstream
=======
            export default Cards
>>>>>>> Stashed changes

export default Cards