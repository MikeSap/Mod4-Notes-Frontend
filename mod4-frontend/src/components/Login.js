import React, { useState } from 'react';
import { connect } from 'react-redux'
import { login } from '../actions'
import { Button, Form } from 'semantic-ui-react'
import { useHistory } from "react-router";




const Login = (props) => {

    const [formData, setFormData] = useState({username:"", password: ""})
    const history = useHistory()
    
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
          <Form widths='equal' onSubmit={handleSubmit}>
          {props.loginInfo.errors? <div><h3>{props.loginInfo.user}</h3></div>: null}
                <Form.Field>
                <input placeholder='username' type="text" name="username" onChange={handleChange} value={formData.username}/>
                </Form.Field>
                <Form.Field>
                <input placeholder='password' type="password" name="password" onChange={handleChange} value={formData.password} />                
                </Form.Field>
                <Button type="submit">Submit</Button>
                <Button onClick={() => history.push('/signup')}>Sign Up</Button>
           </Form>
       );
}
 
const readAccess = (state) => {
  return {
    loginInfo: state.login
  }
}

export default connect(readAccess, { login })(Login);