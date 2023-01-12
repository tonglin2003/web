import React from 'react'
import {useParams} from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import Cards from './components/Cards';
import SingleProductDisplay from './components/SingleProductsFunction'

function SingleProduct() {
    const { product_id } = useParams();
    //console.log("From the singleProduct: the product id got from the url is: " + typeof(product_id))

    const id = Number(product_id)
    //console.log("From the singleProduct: After the Number() func: " + typeof(id))


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


            <Spacer />
            <Spacer />
            <Footer />

        </>
    )
}

export default SingleProduct;