import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import './AdminProducts.css'
import { useNavigate,useParams,Link, NavLink } from 'react-router-dom';
import AdminHeader from '../Header/AdminHeader';

const AdminProducts = () => {
  const{id}=useParams();
    const [productDetails,setProductDetails]=useState([])
useEffect(()=>{
    getProductDetails()
},[])

    const getProductDetails=()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data);
            setProductDetails(res.data)
            console.log(productDetails);
        }).catch((err)=>{
            console.log("Sorry Could Not get the details for you",err);
        })
    }
const deleteProduct= async (id)=>{
 await axios.delete(`https://fakestoreapi.com/products/${id}`).then((res)=>{
  setProductDetails(productDetails.filter(p=>p.id!=id))
 }).catch((err)=>{
  console.log(err);
 })
}

  return (
<>
<AdminHeader/>
<div>
  <Table>
    <TableHead >
      <TableRow className='thead'>
        <TableCell>ID</TableCell>
        <TableCell>Product</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Image</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Edit</TableCell>
        <TableCell>Delete</TableCell>
      </TableRow>
    </TableHead>

   <TableBody>
   {
    productDetails.map((item,i)=>{
        return(
            <TableRow key={i} >
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell className='productImg'> <img src={item.image} alt="Product Image" className='productImg' /> </TableCell>
            <TableCell className='lead fw-bold'><h3 className='lead fw-bold'>${item.price}</h3></TableCell>
            <TableCell> <NavLink to={`/edit/${item.id}`} className='btn btn-success'><EditIcon /></NavLink> </TableCell>
            <TableCell> <button  className='btn btn-danger' onClick={()=>{deleteProduct(item.id)}}><DeleteIcon/></button> </TableCell>
            </TableRow>
        )
    })
   }
   </TableBody>
      </Table>
    </div>
</>    
  )
}

export default AdminProducts
