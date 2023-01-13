import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import Cards from './components/Cards';
import { Link } from 'react-router-dom';
import SingleProductDisplay from './components/SingleProductsFunction'
import axios from "axios";
import RecommendProductsDisplay from "./components/SimilarProductsRecommend";

function SingleProduct() {
    // ----- Get the product id to fetch the product data from the API -------- //
    const { product_id } = useParams();
    const id = Number(product_id)

    const { category } = useParams();
    console.log("Inside the single product, the category is: " + category)





    return (
        <>
            <Header />
            <Spacer />

            {/*-------- Big Card for Single Product --------- */}

            <SingleProductDisplay productId={id}/>

            <Spacer />
            <RecommendProductsDisplay category={category}/>

            <Spacer />

            {/*--------- Leading to Brief Company Bio/ About Page --------*/}

        <div className= "LearnMore card text-center">
        <div className= "LearnMore card-header">
          Connections Made Possible by Justworks
        </div>
        <div className= "LearnMore card-body">
          <h5 className= "LearnMore card-title">Name of Client</h5>
          <div className= "LearnMorecard-footer text-muted">
        Founded in 2022
        </div>
          <p className= "LearnMore card-text">Their slogan etc. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Orci a scelerisque purus semper eget. Non sodales neque sodales ut. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus mauris a diam maecenas. Phasellus vestibulum lorem sed risus ultricies tristique. Sit amet porttitor eget dolor morbi non arcu risus quis. Volutpat est velit egestas dui.</p>
          <Link to="/briefbio" style={{textDecoration: "none"}}><button type="button" className="button-6 m-3">Learn More About Us</button></Link>
        </div>
      </div>


            <Spacer />
            <Spacer />
            <Footer />

        </>
    )
}

export default SingleProduct;