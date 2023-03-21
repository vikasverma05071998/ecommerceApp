import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { addToCart, delCart } from '../../redux/Action';
import Header from '../Header/Header';
const Cart = () => {
  const Cartproduct = useSelector((state) => state.handleCart)
  const dispatch=useDispatch()

const plusProduct=(product)=>{
  dispatch(addToCart(product))
}
let DecreaseProduct=(product)=>{
  dispatch(delCart(product))
}
  return (
    <>
    <Header/>
    <div>
      <div className="cartWrpper">
        {
          Cartproduct.map((product,id) => {
            return (
              <div className="cart mt-4" key={id} >
                <div className="row">
                  <div className="col-md-4">
                    <img src={product.image} alt="" height='200px' width='180px' />
                  </div>
                  <div className="col-md-4">
                  <h3>{product.title}</h3>
                  <p className="lead fw-bold">
                  {product.qty} X ${product.price}=$
                 {Math.floor(product.qty * product.price)}
                  </p>
                  <button className='btn btn-success' onClick={()=>plusProduct(product)} ><AddIcon/></button>
                  <button className='btn btn-success' onClick={()=>DecreaseProduct(product)} ><RemoveIcon/></button>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>
    </div>
    </>

  )
}

export default Cart
