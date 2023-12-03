import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function Privateroute({children}) {
    let isAuth=JSON.parse(localStorage.getItem('isAuth')) ;
    const location=useLocation()
    
  return (
   isAuth ?children:<Navigate state={location.pathname} to="/login" replace={true}/>
  )
}

export default Privateroute
