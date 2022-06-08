import { Link } from 'react-router-dom'
import Button from './Button'

export default function ProductsC({ products }) {

    return products.map(v => <div key={v.id}  className='Products'>
        <Link to={'/item/' + v.id}>
        <div>
            <img src={v.image} /><br/>
            {v.price} $<br/>
           <div className='title'> {v.title} </div>

        </div>
    </Link>
           <Button/>
    </div>)

}