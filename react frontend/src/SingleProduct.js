import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import Cards from './components/Cards';
import SingleProductDisplay from './components/SingleProductsFunction'
import axios from "axios";

function SingleProduct() {
    // ----- Get the product id to fetch the product data from the API -------- //
    const { product_id } = useParams();
    const id = Number(product_id)





    return (
        <>
            <Header />
            <Spacer />

            {/*-------- Big Card for Single Product --------- */}

            <SingleProductDisplay productId={id}/>

            <Spacer />


            <Spacer />


            <Spacer />
            <Spacer />
            <Footer />

        </>
    )
}

export default SingleProduct;