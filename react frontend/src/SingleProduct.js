import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards';


function SingleProduct() {
    return (
        <>
            <Header />

            {/* Big Card */}
            <Cards size={3} image={1} />

            <p> <br></br></p>

            <div class="row row-cols-3 g-2" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Medium Cards */}
                <Cards size={2} image={2} />
                <Cards size={2} image={3} />
                <Cards size={2} image={4} />

            </div>

            <p><br></br> <br></br></p> <p></p>

            <div class="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Small Cards */}
                <Cards size={1} image={1} />
                <Cards size={1} image={2} />
                <Cards size={1} image={3} />
                <Cards size={1} image={4} />

            </div>
            <p><br></br> <br></br></p> <p></p>


        </>
    )
}

export default SingleProduct;