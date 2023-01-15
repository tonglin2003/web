import React, { useState } from 'react';
import ProductPosting from './ProductPosting'

const PostProductForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

        const postProduct = () => {
        ProductPosting.PostProduct({title, price, description, category, image})
            // will come back to the postedProduct thing later!
            .then((response) => props.postedProduct(response))
            .catch(error => console.log('error', error))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postProduct()
        setTitle('')
        setPrice('')
        setDescription('')
        setCategory('')
        setImage('')
    }

    return (
        // <form onSubmit = {handleSubmit}>
        //     <label htmlFor="title" className="form-label">Title</label>
        //       <input
        //       type="text"
        //       className="form-control"
        //       placeholder ="Enter title"
        //       value={title}
        //       onChange={(e)=>setTitle(e.target.value)}
        //       required
        //       />
        //     <label htmlFor="price" className="form-label">Price</label>
        //       <input
        //       type="number"
        //       min={1}
        //       step={0.01}
        //       className="form-control"
        //       placeholder ="Enter Price"
        //       value={price}
        //       onChange={(e)=>setPrice(e.target.value)}
        //       required
        //       />
        //
        //     <label htmlFor="description" className="form-label">Description</label>
        //       <input
        //       type="text"
        //       className="form-control"
        //       placeholder ="Enter description"
        //       value={description}
        //       onChange={(e)=>setDescription(e.target.value)}
        //       required
        //       />
        //
        //     <label htmlFor="category" className="form-label">Category</label>
        //       <input
        //       type="text"
        //       className="form-control"
        //       placeholder ="Enter category"
        //       value={category}
        //       onChange={(e)=>setCategory(e.target.value)}
        //       required
        //       />
        //
        //     <button className={"btn btn-primary mt-2"}>
        //         Publish product
        //     </button>
        //
        // </form>
        <form style={{width:"1500px", border:"solid", borderColor:"whitesmoke"}}
              onSubmit = {handleSubmit}>

            {/*---------- Title Section -------------*/}

                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" htmlFor="form6Example1">
                                <div >*Title</div>
                                <div style={{fontSize:"10px", color:"gray"}}>
                                    Include keywords that buyers would use to search for your item.
                                </div>
                            </label>
                            <input type="text"
                                   className="form-control"
                                   placeholder="Enter Product Title"
                                   value={title}
                                   onChange={ (e) => setTitle(e.target.value)}
                                   required
                            />
                        </div>
                    </div>


            {/*---------- Price Section -------------*/}
                    <div> *Price of Product </div>
                        <div style={{fontSize:"10px" , color:"gray"}}>
                            Type a two or three-word description of your item to get category suggestions that will help more shoppers find it. Examples: Hoodie, ring
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <input type="number"
                                       className="form-control"
                                       placeholder="Enter Product Price"
                                       value={price}
                                       step={0.01}
                                       min={1}
                                       onChange={ (e) => setPrice(e.target.value)}
                                       required
                                />
                                <label className="form-label" htmlFor="form6Example2"></label>
                            </div>
                        </div>



            {/*---------- Category Section -------------*/}
                        <div> Product Category </div>
                            <div style={{fontSize:"10px" , color:"gray"}}>
                                This will allow a buyer to contact you directly for any needed questions.
                            </div>
                        <div className="form-outline mb-4">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Enter Product Category"
                                   value={category}
                                   onChange={ (e) => setCategory(e.target.value)}
                                   required
                            />
                            <label className="form-label" htmlFor="form6Example5"></label>
                        </div>


            {/*---------- Description Section -------------*/}
                      <div> Product Description and Additional Information (Optional) </div>
                                <div style={{fontSize:"10px" , color:"gray"}}>
                                    Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!
                                </div>
                                <div style={{fontSize:"10px" , color:"gray"}}>
                                    Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.
                                </div>
                                <div className="form-outline mb-4">
                                    <textarea className="form-control"
                                              rows="4"
                                              placeholder={"Enter product description"}
                                              value={description}
                                              onChange={ (e) => setDescription(e.target.value)}
                                              required
                                    />


                                    <label className="form-label" htmlFor="form6Example7"></label>
                                </div>

            {/*---------- Image Section -------------*/}
                <div style={{paddingTop: "20px"}}>
                    Upload your image.
                </div>
                <div style={{fontSize:"10px" , color:"gray"}}>
                    Tips to make your product stand out:
                    <ul>
                        <li>Use natural lighting and no flash.</li>
                        <li> Show the item being held, worn, or used. </li>
                        <li> Shoot against a clean, simple background. </li>
                    </ul>

                    <input type="text"
                                   className="form-control"
                                   placeholder="Enter Product Image Link"
                                   value={image}
                                   onChange={ (e) => setImage(e.target.value)}
                                   required
                            />
                </div>


            {/*---------- Submit Button Section -------------*/}
                {/* SUBMIT BUTTON */}
                <button type="submit" className= "btn btn-primary btn-block mb-4" id="button-6" style={{width:"100%"}}> Upload Product </button>
        </form>

    )

}

export default PostProductForm;
