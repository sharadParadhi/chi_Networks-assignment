import React from 'react'
import FavCard from '../../components/Card';

function Cart() {

  let favoritList=JSON.parse(localStorage.getItem('fList')) || [];
  console.log(favoritList)
  


  console.log(favoritList)

  return (
    <div className='favorite'>

      <div className='movies'>
       {favoritList.map((ele,ind)=>{
        return (
          <FavCard
            kye={ind}
            {...ele}
          />
        )
       })}
     </div>
      
    </div>
  )
}

export default Cart
