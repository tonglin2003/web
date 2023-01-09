import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import Cards from './components/Cards';
import Search from './components/Search';


function BrowseProducts() {
    return (
        <>
            <Header />
            <Spacer />

            <h1 style={{marginLeft: '50px'}}>Browse Products</h1>
            
            <div style={{marginLeft: '50px'}} >
                <Search />
            </div>

            <Spacer />

            <div className="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Small Cards */}
                <Cards size={1} image={1} />
                <Cards size={1} image={2} />
                <Cards size={1} image={3} />
                <Cards size={1} image={4} />

            </div>
            <Spacer />

               <div className="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Small Cards */}
                <Cards size={1} image={1} />
                <Cards size={1} image={2} />
                <Cards size={1} image={3} />
                <Cards size={1} image={4} />

            </div>
            <Spacer />
            <Footer />
        </>
    )
}

export default BrowseProducts;