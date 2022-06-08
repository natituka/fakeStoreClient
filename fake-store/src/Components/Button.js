import { useState } from "react"

export default function Button() {

    const [amount, setAmount] = useState(0)

    return amount >=1 ? <div className="button">
        <button onClick={() => setAmount(amount - 1)}>-</button>
        {amount}
        <button onClick={() => setAmount(amount + 1)}>+</button>
    </div> :
    <button className="buyButton" onClick={() => setAmount(amount + 1)}>buy</button>
}