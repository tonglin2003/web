import { useState } from 'react';
import ProductPosting from './ProductPosting'
// import postPage from "../PostPage";

const PostProductForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState('')

    // const postProduct = () => {
    //     ProductPosting.PostProduct({title, price, description, category, image})
    //         // will come back to the postedProduct thing later!
    //         .then((response) => props.postedProduct(response))
    //         .catch(error => console.log('error', error))
    // }

        const postProduct = () => {
        ProductPosting.PostProduct({title})
            // will come back to the postedProduct thing later!
            .then((response) => props.postedProduct(response))
            .catch(error => console.log('error', error))
            console.log("INSIDE POSTPRODUCTFORM, THE TITLE IS: " + title)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        postProduct()
        setTitle('')
        // setPrice('')
        // setDescription('')
        // setCategory('')
        // setImage('')
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label htmlFor="title" className="form-label">Title</label>
              <input
              type="text"
              className="form-control"
              placeholder ="Enter title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              required
              />

            {/*<label htmlFor="body" className="form-label">Price</label>*/}
            {/*<textarea className="form-control"*/}
            {/*          placeholder="Enter price"*/}
            {/*          rows='1'*/}
            {/*          value={price}*/}
            {/*          onChange={(e) => setPrice(e.target.value)}*/}
            {/*          required*/}
            {/*>*/}
            {/*</textarea>*/}

            <button className={"btn btn-primary mt-2"}>
                Publish product
            </button>

        </form>

    )

}

export default PostProductForm;
