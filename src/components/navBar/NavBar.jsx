import {Link, Outlet } from "react-router-dom"
import { CartWidget } from "../CartWidget";
import Stack from 'react-bootstrap/Stack';
import "./NavBar.css";

function NavBar() {
  return (
    <>
    <Stack direction="horizontal" gap={3}>
    
        <div className='navbar'>
    
            <div>
                <img className="logo" src="../img/LogoGde.png" alt="logo." />
            </div>
    
            <ul className='navbar-links'>
                <li className='navbar-item'>
                    <Link to= {"/" } className="button">Home</Link>
                </li>
                               
                <li className='navbar-item'>
                    <Link to= {"category/Jugos"} className="button">Jugos</Link>
                </li>
                <li className='navbar-item'>
                    <Link to= {"category/Licuados"} className="button">Licuados</Link>  
                </li>
                <li className='navbar-item'>
                    <Link to= {"category/Sandwiches"} className="button">Sandwiches</Link>  
                </li>
                
            </ul>
            <div className='carrito'> 
               <CartWidget />
            </div>
        
        </div>
    </Stack>
    <Outlet/>
    </>
  )
}

export default NavBar