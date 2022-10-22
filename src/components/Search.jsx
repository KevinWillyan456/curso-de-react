import { MagnifyingGlass } from 'phosphor-react'
import './Search.css'

export function Search(){
    return (
        <div className="search-container">
           <MagnifyingGlass className="search-icon" size={24} color="#F76190" />
           <input type="Search" placeholder="Buscar" />
           <a href=""></a>
        </div>
    )
}