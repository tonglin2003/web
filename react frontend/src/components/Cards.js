import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

var image = "";

const Cards = ({size, image, title, price}) => {

    if(image){image =`${image}`}


    if(size === 1){ return <SmallCard image = {image} title={title} price={price}/> }
    else if(size === 2){ return <MediumCard image = {image} />}
    else if (size === 3) {return <LargeCard image ={image} /> }
}

const LargeCard = ({image, title, price}) => {
    console.log(image);
    return(
    <>
        <div className="col text-center">
            <div className="col text-center">
                <h1>Write the product / subsciption name here</h1>
                <p> <br></br></p>
                <div className="col d-flex justify-content-center"><div className="card"></div>.
                    <div className="card" style={{width: '45 rem'}}>
                        <img src={image} className="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">${price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col text-center">

            <p> <br></br> </p>
            <p> Write discrption of product. for example:</p>

            <li>
                <ul id="center">Imported</ul>
                <ul id="center">Length: 10.25in / 26cm</ul>
                <ul id="center">Height: 6.25in / 16cm</ul>
            </li>
            <p><br></br></p>
            check out more products below
            <p><br></br></p>
        </div>
        </>
    )
}

const MediumCard = ({image, title, price}) => {
    return(
        <>
            <div className="col-sm">
                <div className="card">
                    <img src={image} className="card-img-top" alt="Palm Springs Road" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            ${price}
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
