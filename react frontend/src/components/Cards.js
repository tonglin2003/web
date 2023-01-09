import React from 'react'
import { Link } from 'react-router-dom'

var image = "";
const Cards = ({size, image}) => {
    if(image===1){image ='https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp'}
    else if(image===2){image ='https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp'}
    else if(image===3){image ='https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp'}
    else if(image===4){image ='https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp'}
    console.log(image);

    if(size === 1){ return <SmallCard image = {image} /> }
    else if(size === 2){ return <MediumCard image = {image} />}
    else if (size === 3) {return <LargeCard image ={image} /> }
}

const LargeCard = ({image}) => {
    console.log(image);
    return(
    <>
        <div class="col text-center">
            <div class="col text-center">
                <h1>Write the product / subsciption name here</h1>
                <p> <br></br></p>
                <div class="col d-flex justify-content-center"><div class="card"></div>.
                    <div class="card" style={{width: '45 rem'}}>
                        <img src={image} class="card-img-top" alt="Hollywood Sign on The Hill" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Write samething as it was in the last page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col text-center">

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

const MediumCard = ({image}) => {
    return(
        <>
            <div class="col">
                <div class="card">
                    <img src={image} class="card-img-top" alt="Palm Springs Road" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </p>
                        <div class="col text-center">
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
            <div class="col">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards

