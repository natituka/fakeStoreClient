import Categories from "../Components/Categories";
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Home() {

const [categories,setCategories] = useState()

useEffect(()=> {axios.get("http://localhost:4200/categories").then(res=> setCategories(res.data))},[])
// useEffect(()=> {axios.get("https://fakestoreapi.com/products/categories").then(res=> setCategories(res.data))},[])

console.log(categories)

    return categories ?
    <div className="home">
        <Categories categories={categories}/>
    </div> 
     : <div className="loading">loading....</div>

}