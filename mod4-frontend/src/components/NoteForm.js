import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newNote } from '../actions/index'
// import { Route, Redirect } from "react-router-dom"


class NoteForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: ''
         }
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.newNote(this.state)
        this.setState({
          title: '',
          content: ''
        })
          // <Redirect to='/notes'/>
      }
    
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>add note</label>
                    <input type="text" name="title" placeholder="title" onChange={(event) => this.handleChange(event)} value={this.state.title}/>
                    <input type="text" name="content" placeholder="content" onChange={(event) => this.handleChange(event)} value={this.state.content}/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default connect(null, {newNote} )(NoteForm);