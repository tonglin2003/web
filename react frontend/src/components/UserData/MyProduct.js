import React, {useState, useEffect} from 'react'
import {isArray} from "chart.js/helpers";
import WideCards from "../CardsComponent/WideCards";
import SmallCards from "../CardsComponent/SmallCards";
import {MDBContainer} from "mdb-react-ui-kit";
import UserProductCards from "../CardsComponent/UserProductCards";

const MyProduct = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const productIdList = user.products

    const [products, setProducts] = useState([])


    // First fetching the product one by one using the id
    // Store the JSON format inside the product list
    // use map to display all those product in my product

    const fetchProductInfo = () => {
        fetch(`/getMoreItemByKey`,{
                'method':'POST',
                 headers : {
                'Content-Type':'application/json'
          },
          body:JSON.stringify({"id": productIdList} )
        })
        .then(response => (response.json()))
            .then((productData) => setProducts( productData ))
        .catch(error => console.log(error))
	}

        useEffect(() =>{
            fetchProductInfo();
            }, []);

    // console.log("The product is: " + JSON.stringify(products))

    return(

            <MDBContainer fluid>
                            {
                                products.map(product => (<UserProductCards size={1}
                                                                    image={product.image}
                                                                    title={product.title}
                                                                    price={product.price}
                                                                    discount = {product['percent discount']}
                                                                    productId={product.id}
                                                                    category = {product.category}
                                                                    description={product.description}
                                    />
                                    // category is working fine when used console.log

                                ))
                            }
            </MDBContainer>
    )

}

export default MyProduct;
