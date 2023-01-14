import { useState } from 'react';
import ProductPosting from './ProductPosting'

const PostProductForm = (props) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    // const [image, setImage] = useState('')

        const postProduct = () => {
        ProductPosting.PostProduct({title, price, description, category})
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
            <label htmlFor="price" className="form-label">Price</label>
              <input
              type="number"
              min={1}
              step={0.01}
              className="form-control"
              placeholder ="Enter Price"
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              required
              />

            <label htmlFor="description" className="form-label">Description</label>
              <input
              type="text"
              className="form-control"
              placeholder ="Enter description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              required
              />

            <label htmlFor="category" className="form-label">Category</label>
              <input
              type="text"
              className="form-control"
              placeholder ="Enter category"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              required
              />

            <button className={"btn btn-primary mt-2"}>
                Publish product
            </button>

        </form>

    )

}

export default PostProductForm;
