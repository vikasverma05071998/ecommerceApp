import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Action';
import axios from 'axios'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import './ProductDetails.css'
import Header from '../Header/Header';
const ProductDetails = () => {
  const dispatch =useDispatch()
  const addProduct=(product)=>{
dispatch(addToCart(productDetail))
console.log(productDetail);
}
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState([])
  const getProductDetail = async () => {
    await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      console.log(res.data)
      setProductDetail(res.data)
    })
  }

  useEffect(() => {  
    getProductDetail()
  }, [])
  const ShowProduct = () => {
    return (
      <>
      <div className='mt-0'> 
      <Header/>
      </div>
        <div className="col-md-6">
          <img src={productDetail.image} alt="" height='400px' width="400px" />
        </div>

        <div className="col-md-6 ">
          <h4 className='text-uppercase text-black-50' >{productDetail.category}</h4>
          <h1 className='display-5'>{productDetail.title}</h1>
          <p className="lead fw-bolder">{productDetail.rating && productDetail.rating.rate} <StarIcon /> </p>
          <p className="lead fw-bolder">{productDetail.description}</p>
          <h3 className="display-6 fw-bold my-4">${productDetail.price}</h3>
          <button className='btn btn-success px-4 py-2' onClick={()=>addProduct(productDetail)} >Add me!</button>
          <NavLink to='/Cart' className='btn btn-success' >Go to Cart</NavLink>
        </div>
      </>
    )
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <ShowProduct/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
