import React from 'react'

function Privateroute({child}) {
    let isAuth=JSON.parse(localStorage.getItem('isAuth')) ;
    console.log(isAuth)
  return (
    <div>

      
    </div>
  )
}

export default Privateroute
