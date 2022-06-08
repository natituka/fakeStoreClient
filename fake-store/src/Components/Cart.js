import { useState } from "react"

export default function Cart() {

    const [cart, useCart] = useState([])

    return cart.length > 0 ? cart.map(v => <div key={v.id} className='cart'>
        <div>

            <img src={v.image} /><br />
            {v.price} $<br />
            <div className='title'> {v.title} </div>

        </div>
    </div>) :
        <div className='cart'>cart is empty</div>

}