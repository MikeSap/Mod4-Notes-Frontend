import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: ""
         }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.login(this.state)
        this.setState({
          username: '',
        })
      }
    
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
    
    render() {
        return(
          <div>
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
              <input type="text" name="username" onChange={(event) => this.handleChange(event)} value={this.state.username}/>
              <input type="submit" />
           </form>
         </div>
       );
    }
}
 
export default Login;