import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductsC from '../Components/ProductsC'
export default function ProductsP(){
    
const [products,setProducts] = useState(),
params = useParams()

useEffect(()=> {axios.get(`http://localhost:4200/category/${params.products}`).then(res=> setProducts(res.data))},[])
// useEffect(()=> {axios.get(`https://fakestoreapi.com/products/category/${params.products}`).then(res=> setProducts(res.data))},[])

return products ? 
<div className="home">
<ProductsC  products={products}/>
</div> :
 <div className="loading">loading....</div>

}