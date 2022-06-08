import { NavLink } from "react-router-dom"

export default function Header() {
    return  <header>
            nati'store
            <nav>
                <NavLink to='/'>
                    Home
                </NavLink>
            </nav>
        </header>
}