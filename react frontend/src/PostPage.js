import React, {useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'
import PostProductForm from './components/PostingProductFunctions/PostProductForm'

function PostPage() {
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    {/*setImage was next to [image]*/}
const [image, setImage] = useState(require('./img/images.png'));


    const postedArticle = (product) => {
        const new_product = [...products, product]
        setProducts(new_product)
    }

    const toggleShowForm = () => {
        setShowForm(!showForm);
    }

            {/* uploads image to website ---------*/}
    function handleImageChange(e) {
         setImage(URL.createObjectURL(e.target.files[0]));
        // setNewImage2(URL.createObjectURL(e.target.files[0]));
    }
    // function handleImageChanges(e) {
    //     // setImage(URL.createObjectURL(e.target.files[0]));
    //     setNewImage2(URL.createObjectURL(e.target.files[secondImage]));
    // }
    return (
        <>
            <Header />
            <Spacer />



            {/*<p style={{textAlign:"center",padding:"10px"}}> Sell your products </p>*/}
            {/*<div  style={{justifyContent: "center", display: "flex"}}>*/}

<p style={{paddingLeft:"120px", fontWeight:"500",  fontSize:"25px"}}> Product Details </p>
            <p style={{fontSize:"10px" , color:"gray", paddingLeft:"120px"}}> Tell the world about your awesome product!</p>
            <PostProductForm postedProduct={postedArticle}/>

            <Spacer />
            <Footer />

        </>
    )
}

export default PostPage;
