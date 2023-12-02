import React from 'react'
import MovieCard from '../../components/MovieCard';

function Cart() {

  let favoritList=JSON.parse(localStorage.getItem('favoritesList')) || [];
  console.log(favoritList)
  


  console.log(favoritList)

  return (
    <div className='favorite'>

      <div className='movies'>
       {favoritList.map((ele,ind)=>{
        return (
          <MovieCard
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
