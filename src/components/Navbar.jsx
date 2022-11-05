import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";



// DATA FILE


// STYLES
import "./Navbar.css";

export default function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const imgurl = "https://acm-thapar.github.io/img/logo.png";

  return (
    <>
      <div >
        {/* <IconContext.Provider> */}
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars className="burger" onClick={showSidebar} />
          </Link><span className='nav-title'>{props.title}</span>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
              <img className='logoimage' src={imgurl} alt="logo" />
            </li>

            {props.data.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <NavLink exact to={item.path} activeClassName="active">
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* </IconContext.Provider> */}
    </>
  );
}
