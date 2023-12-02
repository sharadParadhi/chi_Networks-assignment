import React, { useState } from 'react'
import "./login.css"
import { Link, useNavigate } from 'react-router-dom'

const Login=()=> {
const [loginDetail,setLoginDetail]=useState({email:"",password:""})
const [checkValidDetail,setCheckValidDetail]=useState(true)
  const favorite=JSON.parse(localStorage.getItem("favorites")) 
  const navigate=useNavigate()

  localStorage.setItem('isAuth', JSON.stringify("false"))

  console.log(favorite)

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setLoginDetail((prev)=>{
      return ({...prev,[name]:value})
    })
  }


  const checkLog=(detail)=>{
    let flag=false
    const data=favorite.filter((ele,ind)=>{
      if(ele.email===loginDetail.email && ele.password===loginDetail.password){
        flag=true
      }
    })
    return flag

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    
    if(checkLog(loginDetail)){
      alert(`Welcome Back ${loginDetail.email}`)
      
      localStorage.setItem('isAuth', JSON.stringify("true"))
      navigate("/")
    }else{
      setCheckValidDetail(!checkValidDetail)
    }
    
   
    setLoginDetail("")

  }

  return (
    <div className='login-container'>
    <div className='login'>
      <div className='login-left'>
        <img src='' alt=''/>
      </div>
      <div className='login-right'>
        <form onSubmit={handleSubmit}>
          <h3>Login</h3>
          <p>Welcome Back! Please enter valid email.</p>
          {!checkValidDetail && <p style={{color:"red"}}>Enter Valid email Or Password</p>}
          <label>User Email</label>
          <input value={loginDetail.email} name="email" placeholder='email' onChange={handleChange}/>
          <label>Password</label>
          <input value={loginDetail.password} name="password" placeholder='password' onChange={handleChange}/>
          <button type='submit'>Login</button>
        </form>
        <p>Not a customer yet ? <span><Link to="/signup">SignUp</Link></span> </p>
      </div>
    </div>
    </div>
  )
}
export default Login

