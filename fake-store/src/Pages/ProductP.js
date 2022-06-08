import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductC from '../Components/ProductC'
import Cart from "../Components/Cart";

export default function ProductP(){
    
const [product,setProduct] = useState(),
params = useParams()

useEffect(()=> {axios.get(`http://localhost:4200/category/product/${params.itemId}`).then(res=> setProduct(res.data))},[])
// useEffect(()=> {axios.get(`https://fakestoreapi.com/products/${params.itemId}`).then(res=> setProduct(res.data))},[])

return product ? <div className="home">
<ProductC  product={product}/>
</div> :
 <div className="loading">loading....</div>


}