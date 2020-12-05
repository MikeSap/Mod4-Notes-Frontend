import React, { useState } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'



const Login = (props) => {

    const [formData, setFormData] = useState({username:"", password: ""})

    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(formData)
        setFormData({
          username: '',
          password: ''
        })
      }
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }

        return(
          <div>
            {props.loginInfo.errors? <div><h3>{props.loginInfo.user}</h3></div>: null}
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={handleChange} value={formData.username}/>
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} value={formData.password}/>
                <input type="submit" />
                <button value="Sign Up"/>
           </form>
         </div>
       );
}
 
const readAccess = (state) => {
  return {
    loginInfo: state.login
  }
}

export default connect(readAccess, { login })(Login);