import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import '../Login.css'

const Login = () => {

  const [userId , setUser] = useState('')
  const [pass , setPass] = useState('')

  const login=(e)=>{
    
e.preventDefault();

    console.log(userId , pass)
      if(userId == 'admin'  &&  pass == 'admin'){
        window.location.href="/dashboard";
      }else{
        alert('user name and password is admin')
      }
     
     
      
      document.getElementById('user').value = ''
      document.getElementById('pass').value = ''

  }
  return (
  
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div id="login-column" >
      <div id="login-box" >
      <form id="login-form" className="form" >
      <h3 className="text-center text-success">Login</h3>
                            <div className="form-group">
                                <label htmlFor="username" className="text-success">Username:</label>
                                <input type="text" id="user"  className="form-control" onKeyUp={text => setUser(text.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="text-success">Password:</label>
                                <input type="text" id="pass"   className="form-control" onKeyUp={text => setPass(text.target.value)}/>
                            </div>
                            <div className="form-group">
                           
                            <button className="btn btn-success btn-md btnSize" onClick={(e)=>{login(e)}} >Submit</button>

         
                            </div>
                           
      </form>
      </div>
      </div>

    </div>
    
   
)
};

export default Login;
