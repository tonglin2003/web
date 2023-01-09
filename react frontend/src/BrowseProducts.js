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
            <br></br> <br></br>

            <h1 style={{marginLeft: '50px'}}>Browse Products</h1>

            <div style={{marginLeft: '50px'}} >
                <Search />
            </div>

            <p><br></br> <br></br></p> <p></p>

            <div className="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>

                {/* Small Cards */}
                {/*<Cards size={1} image={"https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"} />*/}
                {/*<Cards size={1} image={2} />*/}
                {/*<Cards size={1} image={3} />*/}
                {/*<Cards size={1} image={4} />*/}

                {
                    products.map(product => (
                        <Cards size={1} image={product['image']} title={product['title']} price={product['price']} />
                    ))
                }

{/*                {(typeof products === 'undefined') ? (*/}
{/*    <p>loading...</p>*/}
{/*) : (*/}
{/*    products.map(item => (*/}
{/*            <div className={"m-5"}>*/}
{/*                    <a href={"/"}>{item}</a>*/}
{/*                    <img src={"https://static.swappa.com/static/images/categories/retro/category_iphones_600x600.png"} className={"img-thumbnail"}/>*/}

{/*            </div>*/}
{/*        )*/}
{/*    ))}*/}



            </div>


            {/*<p><br></br> <br></br></p> <p></p>*/}

            {/*   <div className="row row-cols-3 g-3" style={{marginLeft: '50px', marginRight: '50px' }}>*/}

            {/*    /!* Small Cards *!/*/}
            {/*    <Cards size={1} image={1} />*/}
            {/*    <Cards size={1} image={2} />*/}
            {/*    <Cards size={1} image={3} />*/}
            {/*    <Cards size={1} image={4} />*/}

            {/*</div>*/}
            <p><br></br> <br></br></p> <p></p>


        </>
    )
}

export default BrowseProducts;