import React from 'react'
import Header from './components/Header'
import Cards from './components/Cards';
import Search from './components/Search';


function BrowseProducts() {
    return (
        <>
            <Header />
            <br></br> <br></br>

            <h1 style={{marginLeft: '50px'}}>Browse Products</h1>
            
            <div style={{marginLeft: '50px'}} >
                <Search />
            </div>

            <p><br></br> <br></br></p> <p></p>

            <div className="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Small Cards */}
                <Cards size={1} image={1} />
                <Cards size={1} image={2} />
                <Cards size={1} image={3} />
                <Cards size={1} image={4} />

            </div>
            <p><br></br> <br></br></p> <p></p>

               <div className="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>

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

export default BrowseProducts;