import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import Cards from './components/Cards';
import Search from './components/Search';
import axios from "axios"

//todo: Fit all the images and titles and price into the cards!!

//todo: Fetch all the infos of the product into json

//todo: display it on the cards somehow...
function BrowseProducts() {

     const [products, setProduct] = useState([]);
    const fetchProductInfo = () => {
        return axios.get("https://fakestoreapi.com/products")
            .then((response) => setProduct(
                response.data
            ));
    }

    useEffect(() =>{
        fetchProductInfo();
    }, [])

    products.map(product => console.log(product['title']))
    // console.log(`This is the product indexing: ${products}`)
    return (
        <>
            <Header />


            {/*<div className="">*/}
            {/*    <img src={"https://retaildesignblog.net/wp-content/uploads/2021/07/Justworks-Headquarters-by-Unispace-01.png"} width={"1000px"} height={"500px"}/>*/}
            {/*</div>*/}

            {/*<div style={{background:"#1d2138"}}>*/}
            {/*    <div className="row">*/}
            {/*        <div className="col">*/}
            {/*            <div>*/}
            {/*                <p>The deals you can only find on</p>*/}
            {/*                <h3>Justworks</h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="col">*/}
            {/*            <img src={"https://retaildesignblog.net/wp-content/uploads/2021/07/Justworks-Headquarters-by-Unispace-01.png"} className="img-fluid"/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}



            <h1 style={{margin: "10vh 0 0 50px"}}>Browse Products</h1>

            <div style={{marginLeft: '50px'}} >
                <Search />
            </div>

            <p><br></br> <br></br></p> <p></p>



            <div className="row row-cols-3 g-3 mx-5" style={{margin: "0 5vw 0 5vw"}}>

                {
                    products.map(product => (
                        <Cards size={1} image={product['image']} title={product['title']} price={product['price']} />
                    ))
                }

            </div>


            <p><br></br> <br></br></p> <p></p>


        </>
    )
}

export default BrowseProducts;