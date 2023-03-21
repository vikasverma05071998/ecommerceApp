import React, { useEffect, useState } from 'react'
import "./Product.css"
import Card from 'react-bootstrap/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import Header from '../Header/Header';

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate=useNavigate()
    const{id}=useParams()


    const userProduct = async () => {
        await axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.data);
            setProducts(res.data)
                })
    }
    useEffect(() => {
        userProduct()
    }, [])
    const textCut = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  const productDetail=()=>{
    navigate(`/product/${id}`)
  }

  const filterProduct=(categ)=>{
    const updatedProducts=products.filter((x)=>x.category ===categ)
    setProducts(updatedProducts)
  }
    return (
        <>
        <Header/>

        <div className='buttons me-4'>
    <button type="button" className="btn btn-success me-3" onClick={userProduct} >All</button>
    <button type="button" className="btn btn-success me-3" onClick={()=>filterProduct("men's clothing")} >Men's Clothing</button>
    <button type="button" className="btn btn-success me-3" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
    <button type="button" className="btn btn-success me-3" onClick={()=>filterProduct("electronics")}>Electronic</button>
    <button type="button" className="btn btn-success me-3" onClick={()=>filterProduct("jewelery")}>jewelery</button>
    </div>

        <div className='row  explore-card  explore-card-first' >

{
    products.map((Product, i) => {
        return (

            <Card style={{ width: '18rem', border: "none" }} className="px-5 ms-4 max-width cards mt-5 mb-3" key={i} >
                <div className="explore-card  explore-card-first" >
                    <Card.Img variant="top" className="cd" src={Product.image} />
                    <div className="card_body">
                        <div className="upper_data">
                            <h6 className='title' title={Product.title.length >= 50 ? Product.title : null}>{textCut(Product.title,15)}</h6>             
                        </div>
                        <div className="lower_data d-flex justify-content-between">
                            <h2>${Product.price}</h2>
                            <div className="location"><span><LocationOnIcon /><h6>Gujrat</h6> </span> </div>
                        </div>
                        <div className="desc"><p>{textCut(Product.description,30)}</p></div>
                    </div>
                    <NavLink to={`/product/${Product.id}`} className='btn btn-success' >Buy Now</NavLink>
                </div>
            </Card>

        )
    })
}
</div>
        </>




    )
}

export default Product
