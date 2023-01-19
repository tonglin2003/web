import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
import Spacer from './components/Spacer'
import WideCards from './components/CardsComponent/WideCards';
import { Link } from 'react-router-dom';
import SingleProductDisplay from './components/SingleProductPageFunctions/SingleProductsFunction'
import axios from "axios";
import RecommendProductsDisplay from "./components/SingleProductPageFunctions/SimilarProductsRecommend";
import BriefBio from './components/SingleProductPageFunctions/BriefBio';

function SingleProduct() {
    // ----- Get the product id to fetch the product data from the API -------- //
    const { product_id } = useParams();
    const id = Number(product_id)


    const { category } = useParams();
    //console.log("Inside the single product, the category is: " + category)



    return (
        <>
            <Header />
            <Spacer />

            {/*-------- Big Card for Single Product --------- */}

            <SingleProductDisplay productId={id}/>

            <Spacer />
            {/*<RecommendProductsDisplay category={category}/>*/}

            <Spacer />

            {/*--------- Leading to Brief Company Bio/ About Page --------*/}


            <BriefBio/>

            <Spacer />
            <Spacer />
            <Footer />

        </>
    )
}

export default SingleProduct;