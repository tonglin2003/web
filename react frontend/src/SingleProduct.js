import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import Cards from './components/Cards';


function SingleProduct() {
    return (
        <>
            <Header />
            <Spacer />

            {/* Big Card */}
            <Cards size={3} image={1} />

            <Spacer />

            <div class="row row-cols-3 g-2" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Medium Cards */}
                <Cards size={2} image={2} />
                <Cards size={2} image={3} />
                <Cards size={2} image={4} />

            </div>

            <Spacer />

            <div class="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Small Cards */}
                <Cards size={1} image={1} />
                <Cards size={1} image={2} />
                <Cards size={1} image={3} />
                <Cards size={1} image={4} />

            </div>
            <Spacer />
            <Spacer />
            <Footer />

        </>
    )
}

export default SingleProduct;