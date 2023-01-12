import React from 'react'
import {useParams} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import Cards from './components/Cards';
import { Link } from 'react-router-dom';
import SingleProductDisplay from './components/SingleProductsFunction'

function SingleProduct() {
    const { product_id } = useParams();
    console.log("From the singleProduct: the product id got from the url is: " + typeof(product_id))

    const id = Number(product_id)
    console.log("From the singleProduct: After the Number() func: " + typeof(id))


    return (
        <>
            <Header />
            <Spacer />

            {/*-------- Big Card for Single Product --------- */}

            <SingleProductDisplay productId={id}/>

            <Spacer />

            {/*------ Recommendation Section of the Single Product Demonstration Page -------- */}

            <div className="row row-cols-3 g-2" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Medium Cards */}
                <Cards size={2} image={2} />
                <Cards size={2} image={3} />
                <Cards size={2} image={4} />

            </div>

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