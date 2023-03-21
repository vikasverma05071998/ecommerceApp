import React, { useEffect, useState } from 'react'
import "./AddProduct.css"
import axios from 'axios'
import AdminHeader from '../Header/AdminHeader'


const AddProduct = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [Category, setCategory] = useState("")
    const [rate, setRate] = useState("")
    const [count, setCount] = useState("")
    const [image, setImage] = useState([])

    // handleSubmit  Function
    const handleSubmit = (e) => {
        const url = "https://fakestoreapi.com/products"
        e.preventDefault()
        const productData = { title, description, price, Category, rate, count, image }
        console.log(productData);
        axios.post(url, productData).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (

        <>
        <AdminHeader/>
            <div>
                <div className="form-style-5">
                    <form onSubmit={handleSubmit} method='POST'>
                        <fieldset>
                            <legend><span className="number">1</span> Product Details</legend>
                            <input type="text" name="productName" placeholder="Product Name *" value={title} onChange={(e) => setTitle(e.target.value)} />
                            <textarea name="productDescrip" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product Discription"></textarea>
                            <input type="number" name="productPrice" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Product Price *" />
                        </fieldset>

                        <fieldset>
                            <legend><span className="number">1</span> Product Details</legend>
                            <input type="text" name="Category" placeholder="Category *" value={Category} onChange={(e) => setCategory(e.target.value)} />
                            <input type="number" name="Rate" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Rating Rate*" />
                            <input type="number" name="count" value={count} onChange={(e) => setCount(e.target.value)} placeholder="Rating count *" />
                        </fieldset>

                        <fieldset>
                            <legend><span className="number">2</span>Product Image</legend>
                            <div className="ProImg">
                                <input type="file" className='inptImg mb-3' id="img" name="image" onChange={(e) => setImage(e.target.files[0])} accept="image/*" />

                            </div>
                        </fieldset>
                        <input type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </>

    )
}
export default AddProduct
