import {Link} from 'react-router-dom'

export default function Categories({categories}){

return categories.map(v => <Link  key={v}  to={'/categories/'+v}><div className='categories'>{v}</div></Link> )

}