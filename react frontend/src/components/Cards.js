import React from 'react'
import { Link } from 'react-router-dom'
import '../css/styles.css'
// import '../css/productStyle.css'



var image = "";

const Cards = ({size, image, title, price}) => {

    if(image){image =`${image}`}


    if(size === 1){ return <SmallCard image = {image} title={title} price={price}/> }
    else if(size === 2){ return <MediumCard image = {image} title={title} price={price} />}
    else if (size === 3) {return <LargeCard image ={image} title={title} price={price} /> }
}

const LargeCard = ({image, title, price}) => {
    return(
    <>
       {/*<div class="col text-center">*/}
            <div class="container" id="theBack">
                <div class="row">
                      <div class="col-sm">
                         <div class="card" style={{width: "45rem"}}>

<img src ="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" class="card-img-top" id="braceletimg"
        alt="Hollywood Sign on The Hill" />
                        </div>
                    </div>



        <div className="col-sm">
            <p id="theBracelet">Silver Dragon Bracelet (womens) </p>
            <div id="diff">Color: Silver</div>
            <div id="diff">Material: Zinc Alloy</div>
            <div id="diff">Details:	Dragon</div>
            <div id="diff">Style: Fashionable </div>

            <div id ="Colors"> Available sizes: </div>
            <button type="button" className="btn btn-light" id="Onesize">One size</button>

            {/*<button type="button" className="btn btn-secondary">Silver</button>*/}
            {/*<button type="button" className="btn btn-success">Green</button>*/}
            {/*<button type="button" className="btn btn-danger">Red</button>*/}
            {/*<button type="button" className="btn btn-warning">Yellow</button>*/}
            {/*<button type="button" className="btn btn-info">Blue</button>*/}

            <p id="costofbracelet"> $10.05 </p>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" id="addtobag">Buy Now </button>
                <button className="btn btn-primary" type="button" id="addtobag">Add to bag</button>
                {/**/}
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



const MediumCard = ({image, title, price}) => {
    return(
        <>
            <div className="col-sm">
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

const SmallCard = ({image, title, price}) => {
    return(
        <>
            <div className="col-md-4 col-sm-6 col-xs-6 d-block mx-auto">
                <div className="card px-5 text-center position-relative">
                    <img src={image} className="card-img-top d-block mx-auto overflow-auto" alt="Los Angeles Skyscrapers" />
                    <div className="card-body">
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text">${price}</p>
                        <div className="col text-center">
                            <div className="col text-center">
                                <Link to="/" class="button-6 position-absolute" style={{fontSize: "1.5vw", left:"30%", bottom: "10%"}}>Add to cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards