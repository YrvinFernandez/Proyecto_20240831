import React from "react"
import { Link } from "react-router-dom"
import Logo from '../assets/clothes_n.png'

const Header=()=> {
    return(
    <header className='header'>
        <span><img src={Logo} alt="" /></span>
        <nav>
            <ul className='lista'>
                <li><Link className='nav' to='/'>Productos</Link></li>
                <li><Link className='nav' to='/carrito'>Carrito</Link></li>
            </ul>
        </nav>
    </header>
    )
}
export default Header