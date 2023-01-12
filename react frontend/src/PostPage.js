import React, {useEffect, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Spacer from './components/Spacer'

function PostPage() {
    {/*setImage was next to [image]*/}
const [image, setImage] = useState(require('./images/images.png'));
const [secondImage, setNewImage2] = useState(image);
const [thirdImage, setNewImage3] = useState(image);
const [fourthImage, setNewImage4] = useState(image);
const [fifthImage, setNewImage5] = useState(image);
const [sixthImage, setNewImage6] = useState(image);

            {/* uploads image to website ---------*/}
    function handleImageChange(e) {
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <Header />
            <Spacer />

            {/*<p style={{textAlign:"center",padding:"10px"}}> Sell your products </p>*/}
            {/*<div  style={{justifyContent: "center", display: "flex"}}>*/}

<p style={{paddingLeft:"120px", fontWeight:"500",  fontSize:"25px"}}> Product Details </p>
            <p style={{fontSize:"10px" , color:"gray", paddingLeft:"120px"}}> Tell the world about your awesome product!</p>
            <form style={{width:"1500px", border:"solid", borderColor:"whitesmoke"}}>
  <div>
                 {/*class="form-group" this went inside the div up there*/}
                 {/*2 column grid layout with text inputs for the first and last names */}

               <div>*Title</div>
      <div style={{fontSize:"10px" , color:"gray"}}> Include keywords that buyers would use to search for your item. </div>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form6Example1" className="form-control"/>
                            <label className="form-label" htmlFor="form6Example1"></label>
                        </div>
                    </div>

                    <div> *Type of Product </div>
                        <div style={{fontSize:"10px" , color:"gray"}}> Type a two or three-word description of your item to get category suggestions that will help more shoppers find it. Examples: Hoodie, ring </div>
                         <div className="col">
                            <div className="form-outline">
                                    <input type="text" id="form6Example2" className="form-control"/>
                                    <label className="form-label" htmlFor="form6Example2"></label>
                    </div>
                </div>
            </div>



                 {/*Email input */}<div> Email (Optional) </div>
                   <div style={{fontSize:"10px" , color:"gray"}}> This will allow a buyer to contact you directly for any needed questions.</div>
                        <div className="form-outline mb-4">
                            <input type="email" id="form6Example5" className="form-control"/>
                              <label className="form-label" htmlFor="form6Example5"></label>
                </div>

               {/*Number input*/} Phone (Optional)
                <div style={{fontSize:"10px" , color:"gray"}}> This will allow a buyer to contact you directly for any needed questions.</div>
                <div className="form-outline mb-4">
                    <input type="number" id="form6Example6" className="form-control"/>
                    <label className="form-label" htmlFor="form6Example6"></label>
                </div>

                 {/*Message input */}
      <div> Product Description and Additional Information (Optional) </div>
                <div style={{fontSize:"10px" , color:"gray"}}> Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count! </div>
                    <div style={{fontSize:"10px" , color:"gray"}}> Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</div>
                        <div className="form-outline mb-4">
                      <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                     <label className="form-label" htmlFor="form6Example7"></label>
                    </div>

                {/*Checkbox*/}
      {/*<div className="form-check d-flex justify-content-center mb-4">*/}
                    {/*<input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked/>*/}
                    {/*<label className="form-check-label" htmlFor="form6Example8" style={{paddingTop:"8px"}}> Create an account? </label>*/}
      {/*</div>*/}

            <div> Material (Optional) </div>
      <div style={{fontSize:"10px" , color:"gray"}}> Components, Ingredients, etc </div>
                <div className="form-outline mb-4">
                    <input type="text" id="form6Example3" className="form-control"/>
                    <label className="form-label" htmlFor="form6Example3"></label>
                </div>

                {/*{EXTRA LIST THINGY}*/}
                {/*<div className="form-outline mb-4">*/}
                {/*    <input type="text" id="form6Example4" className="form-control"/>*/}
                {/*    <label className="form-label" htmlFor="form6Example4">Address</label>*/}
                {/*</div>*/}
                 {/*Submit button*/}

      <div style={{border:"solid", borderColor:"aliceblue", borderBottom:"20px"}}> </div>
      <div style={{paddingTop: "20px"}}> Upload your image. </div>
            <div style={{fontSize:"10px" , color:"gray"}}> Tips to make your product stand out:
            <ul>
                <li>Use natural lighting and no flash.</li>
                <li> Show the item being held, worn, or used. </li>
                <li> Shoot against a clean, simple background. </li>
                <li>Add photos to your variations so buyers can see all their options.</li>
            </ul>
            </div>

      {/*First upload photo*/}
              <div className="container">
                  <div className="row">
                      <div className="col-sm">
              <input className="form-control form-control-sm" id="formFileSm" style = {{width:"400px"}} type="file"                                 onChange={handleImageChange}
         />
<p>  </p> <p> </p>
                                                 {/* this was profile center, changed to profile cuz it made everything go to the left  */}
      <img src={image} style={{ maxHeight: "200px", maxWidth: "100%" }} className="profile " alt="upload photo"/>
          <p></p>
              </div>

       {/* second upload photo*/}
             <div className="col-sm">
                 {/*<div className="card-block">*/}
               <input className="form-control form-control-sm" id="formFileSm" style = {{width:"400px"}} type="file"                                 onChange={handleImageChange}
         />
                    <p>  </p> <p> </p>
         <img src={secondImage} style={{ maxHeight: "200px", maxWidth: "100%" }} className="profile " alt="Upload second card"/>
        {/*</div>*/}
      </div>

     {/*  Third upload photo  */}
                <div className="col-sm">
               <input className="form-control form-control-sm" id="formFileSm" style = {{width:"400px"}} type="file"                                 onChange={handleImageChange}
         />
                    <p>  </p> <p> </p>
         <img src={thirdImage} style={{ maxHeight: "200px", maxWidth: "100%" }} className="profile " alt="upload photo"/>

              </div>
                  </div>

                {/*                         */}
                {/*  FOURTH upload photo  */}
            <div className="row">
                 <div className="col-sm">
                    <input className="form-control form-control-sm" id="formFileSm" style = {{width:"400px"}} type="file"                                 onChange={handleImageChange}
         />
                                                          <p>  </p> <p> </p>
         <img src={fourthImage} style={{ maxHeight: "200px", maxWidth: "100%" }} className="profile " alt="upload fourth card"/>
            </div>

                {/*FIFTH UPLOAD PHOTO*/}
           <div className="col-sm">
                 <input className="form-control form-control-sm" id="formFileSm" style = {{width:"400px"}} type="file"                                 onChange={handleImageChange}
         />
                                                            <p>  </p> <p> </p>
                 <img src={fifthImage} style={{ maxHeight: "200px", maxWidth: "100%" }} className="profile " />

            </div>

           {/*SIXTH  UPLOAD PHOTO*/}
                <div className="col-sm">
                    <input className="form-control form-control-sm" id="formFileSm" style = {{width:"400px"}} type="file"                                 onChange={handleImageChange}
         />
                    <p>  </p> <p> </p>
         <img src={sixthImage} style={{ maxHeight: "200px", maxWidth: "100%" }} className="profile " />

            </div>
          </div>
        </div>
      </div>
<p> </p>
                {/* SUBMIT BUTTON */}
                <button type="submit" className= "btn btn-primary btn-block mb-4" style={{width:"100%"}}> Submit </button>

     </form>

            <Spacer />
            <Footer />

        </>
    )
}

export default PostPage;