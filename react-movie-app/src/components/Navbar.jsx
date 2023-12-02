

import React, {  useEffect, useState } from "react";
import {Link, NavLink, useSearchParams} from "react-router-dom"
import "./Navbar.css"




 const Navbar = () => {
  
  const [search,setSearch]=useSearchParams("")
  const [searchValue,setSerchValue]=useState("")
  search.get(searchValue)
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleSearch = () => {
    console.log(searchValue)
    setIsExpanded(!isExpanded);
    setSearch(searchValue)
  };

  const toggleMenu = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    

  },[search])

  console.log(search)


  

  
  return (
    <nav>
      <Link to="/" className="title">
      Movies app
      </Link>

      <div className="menu" onClick={toggleMenu}>
       <span></span>
       <span></span>
       <span></span>
      </div>

      {/* <div>
        <SearchBar/>
      </div> */}

      <ul className={isOpen?"open":""}>
      <li>
      <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      
      {isExpanded && (
        <input
        value={searchValue}
          type="text"
          placeholder="Search..."
          className="search-input"
          onChange={(e)=>setSerchValue(e.target.value)}
        />
      )}
      <div className="search-icon" onClick={handleToggleSearch}>
        🔍
      </div>
    </div>
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




