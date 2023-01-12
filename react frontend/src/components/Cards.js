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


    //Here, we still have normal product id
    console.log("From the Cards: " + productId)

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
                          className="card px-5 text-center position-relative"
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
                            </div>
                        </div>
                    </div>
                </div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Cards