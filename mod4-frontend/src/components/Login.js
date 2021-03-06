import React, { useState } from 'react';
import { connect } from 'react-redux'
import { login, signup } from '../actions'
import { Loader, Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
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
        // history.push('/notes')
      }

      // const onSignIn = (googleUser) => {
      //   var profile = googleUser.getBasicProfile();
      //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      //   console.log('Name: ' + profile.getName());
      //   console.log('Image URL: ' + profile.getImageUrl());
      //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      // }
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }
        return(
         
          <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>

            {props.loading ? <Loader active /> : null}

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
                  
                  {/* All this does is sign in with google but it isnt stored anywhere, cant figure out how to get the return of that */}
                  {/* <div class="g-signin2" data-onsuccess="onSignIn">
                    <button />
                  </div> */}

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
    loginInfo: state.login,
    loading: state.loading
  }
}

export default connect(readAccess, { login, signup })(Login);