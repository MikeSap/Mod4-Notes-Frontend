import React, { useState } from 'react';
import { connect } from 'react-redux'
import { login, signup } from '../actions'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import { useHistory } from "react-router";

const Login = (props) => {

    const [formData, setFormData] = useState({username:"", password: "", password_confirmation: ""})
    const history = useHistory()
    const location = history.location.pathname
    
    const handleSubmit = (e) => {
        e.preventDefault();
        location.includes('signup') ? 
        props.signup(formData)
        :props.login(formData)
        setFormData({
          username: '',
          password: '',
          password_confirmation: ''
        })
      }
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
        return(
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

              {/* HOW DO I MAKE THIS CLEANER ALL I NEED TO DO IS CHANGE THE TEXT INSIDE OF HEADER */}
              
              {location.includes('signup') ?
              <Header as='h2' color='black' textAlign='center'>
              Sign-up to FlatNote
              </Header>
              :
              <Header as='h2' color='black' textAlign='center'>
              Log-in to FlatNote
              </Header>
              }
                <Form size='large' onSubmit={handleSubmit}>

                  {/* HOW DO I MAKE THIS MESSAGE TIMEOUT */}
                  {props.loginInfo.errors ? <Message negative>{props.loginInfo.user}</Message> : null}

                  <Segment stacked>
                    <Form.Field>
                    <input placeholder='username' type="text" name="username" onChange={handleChange} value={formData.username}/>
                    </Form.Field>
                    <Form.Field>
                    <input placeholder='password' type="password" name="password" onChange={handleChange} value={formData.password} />                
                    </Form.Field>
                    {location.includes('signup') ? 
                    <Form.Field>
                    <input placeholder='password confirmation' type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} />                
                    </Form.Field>
                    : null }
                    <Button type="submit">Submit</Button>
                  </Segment>

                </Form>
                
                {location.includes('signup') ? null : 
                <Message>
                New to FlatNote? <a href='/signup'>Sign Up</a>
                </Message>
                }
             
             </Grid.Column>
           </Grid>
       );
}
 
const readAccess = (state) => {
  return {
    loginInfo: state.login
  }
}

export default connect(readAccess, { login, signup })(Login);