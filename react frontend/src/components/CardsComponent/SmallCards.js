import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../../css/styles.css'


const SmallCards = ({image, title, price, discount, productId, category}) => {
    /**
     * size (int, Required): from 1 to 3 to decide size
     * Image: (string, Optional): Link or directory to the product image
     * title: (string, optional): Title/name of the product
     * productId: (int, required only if size=1): productId to decide which product to be show on
     * Product demonstration page when the product is being clicked
    * */


    return( <SmallCard image = {image}
                              title={title}
                              price={price}
                              discount={discount}
                              productId={productId}
                              category={category}
    /> )

}


const SmallCard = ({image, title, price, discount, productId, category}) => {
    return(
        <>
             <div className="col-md-4 col-sm-6 col-xs-6 d-block mx-auto d-flex justify-content-center" >
                <div className="card position-relative mb-5" style={{width:"90%"}}>
                    <Link to={`/product/${category}/${productId}`}
                          className="card text-center position-relative"
                          style={{border: "none"}}
                    >
                        <img src={image} className="card-img-top d-block mx-auto overflow-auto w-50 rounded" alt="Los Angeles Skyscrapers" />
                    </Link>
                    <div className="card-body" style={{border:"none"}}>
                        <h5 className="card-title title_font" style={{fontSize:"1.5vw"}}>{title}</h5>
                        { (discount > 0)?
                            <div className="card-text font fw-bold mt-3">
                                <span style={{color: "#983a3a"}}>
                                    ${ (Number(price) * (1-(Number(discount))/100)).toFixed(2)}
                                </span>
                                <span style={{fontSize: "1vw", opacity:"50%"}}>
                                    <del className="m-3">${Number(price).toFixed(2)}</del>
                                </span>
                            </div>
                            :
                            <div className="card-text font fw-bold mt-3">
                                    <p className="font">${Number(price).toFixed(2)}</p>
                            </div>
                        }


                        <div className="col text-center">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default SmallCards