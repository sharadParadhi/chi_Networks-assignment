

import React, {  useEffect, useState } from "react";
import {Link, NavLink, useNavigate} from "react-router-dom"
import "./Navbar.css"
import { AiOutlineUnorderedList,AiOutlineClose  } from "react-icons/ai";




 const Navbar = () => {
  
  
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [sValue,setSvalue]=useState("")

  const navigate = useNavigate();

  const handleToggleSearch = () => {
    
    setIsExpanded(!isExpanded);
    
  };

 
  const toggleMenu = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };

 

  

  
  return (
    <nav>
      <Link to="/" className="title">
      Movies app
      </Link>

      <div className="menu" onClick={toggleMenu}>
      {isOpen?<AiOutlineClose size={60} style={{color:"white"}}/>: <AiOutlineUnorderedList size={60} style={{color:"white"}}/>}
      </div>

      <ul className={isOpen?"open":""}>
        <li>

      

        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Favorite</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar




