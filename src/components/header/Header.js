import React, { useState } from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
function Header() {
    const [menu,setMenu] = useState(false);
    return (
        <div className="header">
           <div className="header_logo">
               <h2>Asian-Country</h2>
           </div>
           <div className={menu?"header_menu header_menu_mobile":"header_menu"}>
              <ul>
                  <li><Link to="/"><a href="#" className="active">DashBoard</a></Link></li>
                  <li><Link to="/about"><a href="#" >About</a></Link></li>
              </ul>
           </div>
           <div className="header_menu_hamburger_icon">
            <a href="#" onClick={()=>setMenu(!menu)}><GiHamburgerMenu/></a>
           </div>
        </div>
    )
}

export default Header;
