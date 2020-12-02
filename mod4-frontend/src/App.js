import './App.css';
import NotesContainer from './containers/NotesContainer'
import NavBar from './components/NavBar'
import Login from './components/Login'
import NoteForm from './components/NoteForm'
import { connect } from 'react-redux'
import { Switch, Route,  Redirect } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const App = (props) => {

  // useState

  useEffect(() => {
    document.title = props.user ? 
    `You are logged in as ${props.user}`
    :
    'You are not logged in'
  })

  return (
    <div>
      <Switch>
        
        <Route exact path="/" render={() => {
          return (
            props.user ?
            <Redirect to="/notes" />
            :
            <div>
            <Redirect to="/login" />
            </div>
          )
        }}/>
        
        <Route exact path="/login" render={() => {
          return (
            props.user ?
            <Redirect to="/notes" />
            :
            <div>
              <Login login={props.login}/>
            </div>
          )}}/>
        
        <Route exact path="/notes" render={() => {
           return (
            props.user ?
            <div>
              <NavBar logout={props.logout}/>
              <NotesContainer /> 
            </div>
            :
            <Redirect to="/login" />
            )}}/>

        <Route exact path="/newNote" render={() => {
           return (
            props.user ?
            <div>
              <NavBar logout={props.logout}/>
              <NoteForm /> 
            </div>
            :
            <Redirect to="/login" />
            )}}/>

      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login.username
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: data => dispatch({type: 'LOGIN', user: data}),
  logout: () => dispatch({ type: 'LOGOUT'}) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App); 