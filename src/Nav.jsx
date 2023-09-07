import {} from 'react'
import './css/estilo.css'
import { NavLink } from 'react-router-dom'

function Nav(){
    return(
        <header className="menu">
        <h1 id="menu-logo">Logo</h1>
        <nav id="menu-nav">
            <ul>
            <li><NavLink to="Exemplo1" id="tlink">Exemplo1</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}

export default Nav