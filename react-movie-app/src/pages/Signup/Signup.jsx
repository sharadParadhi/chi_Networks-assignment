import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import "./signup.css"

function Signup() {
  const [userDetail,setuserDetail]=useState({
    email:"",
    password:"",
    name:"",
  })

 const [isValidEmail,setIsValidEmail]=useState(true)
  const [isValidPassword, setIsValidPassword] = useState(true);

  
  
  let UserList=JSON.parse(localStorage.getItem('favorites')) || [];
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  // email validation
  const checkEmail=(email)=>{
    let flag=false;

    UserList.filter((ele,ind)=>{
      if(ele.email===email){
        flag=true
      }else{
        return ele
      }
    })

    console.log(flag)
    return flag

  }


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setuserDetail(prev=>{
      return {...prev,[name]:value}
    })
  }

  const handlesubmit=(e)=>{
    e.preventDefault()

    //check email already present
    if(checkEmail(userDetail.email)){
      setIsValidEmail(!isValidEmail)
      
    }
   
    // check password validation
    if(setIsValidPassword(strongPasswordRegex.test(userDetail.password))){
      console.log(userDetail.password,"valid")
    }else{
      console.log(userDetail.password,"unValid")
    }
  

    // add favorites
    const favorites=[...UserList,userDetail]
    localStorage.setItem('favorites', JSON.stringify(favorites))
    console.log(favorites)
    setuserDetail("")
   
  }
  return (
    <div className='login-container'>
    <div className='login'>
      <div className='login-left'>
        <img src='' alt=''/>
      </div>
      <div className='login-right'>
        <form onSubmit={handlesubmit}>
          <h3>Create Account</h3>
          <p>Please fill up detail to signup</p>
          <lable>Name</lable>
          <input type="text" name="name" value={userDetail.name} placeholder='name' onChange={handleChange}/>
          <label>User Email</label>
          <input type='email' name='email' value={userDetail.email} placeholder='email' onChange={handleChange}/>
          {!isValidEmail && <p style={{ color: 'red',text:"wrap",overflow:"hidden" }}>Email is already Preset</p>}
          <label>Password</label>
          <input
        type="password" name='password'
        value={userDetail.password}
        onChange={handleChange}
        placeholder='password'
      />
      {!isValidPassword && (
        <p style={{ color: 'red',text:"wrap",overflow:"hidden" }}>
          Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.
        </p>
      )}
          
          <button type='submit'>Create Account</button>
        </form>
        <p>Not a customer yet ? <span><Link to="/login">Sign in</Link></span> </p>
      </div>
    </div>
    </div>
  )
}

export default Signup
