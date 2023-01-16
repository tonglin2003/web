import React, {useEffect, useState } from 'react';
import Header from './components/WebHeaderAndFooter/Header'
import Footer from './components/WebHeaderAndFooter/Footer'
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
    function handleImageChanges(e) {
        // setImage(URL.createObjectURL(e.target.files[0]));
        setImage(URL.createObjectURL(e.target.files[image]));
    }
    return (
        <div>
            <Header />


            <div style={{background: "#F0F8FF"}}>
                <br/>
                <div className="title_font text-center mb-4" style={{fontSize:"3vw"}}>
                    Create Your Own Product
                </div>
                <PostProductForm postedProduct={postedArticle}/>
                <Spacer />
            </div>
            <Footer />

        </div>
    )
}

export default PostPage;
