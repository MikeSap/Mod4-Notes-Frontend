import './App.css';
import NotesContainer from './containers/NotesContainer'
import NavBar from './components/NavBar'
import NoteForm from './components/NoteForm'
import Note from './components/Note'
import { connect } from 'react-redux'
import Login from './components/Login'
import { Switch, Route,  Redirect } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router";

const App = (props) => {

  const location = useLocation()

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
              <Login />
            </div>
          )}}/>
        
        <Route exact path="/notes" render={() => {
           return (
            props.user ?
            <div>
              <NavBar />
              <NotesContainer /> 
            </div>
            :
            <Redirect to="/login" />
            )}}/>

        <Route exact path="/notes/new" render={() => {
           return (
            props.user ?
            <div>
              <NavBar />
              <NoteForm /> 
            </div>
            :
            <Redirect to="/login" />
            )}}/>
        
        <Route exact path="/note/edit/:id" render={() => {
           return (
            props.user ?
            <div>
              <NavBar />
              <NoteForm /> 
            </div>
            :
            <Redirect to="/login" />
            )}}/>
        
        <Route exact path="/notes/:id" render={() => {
          let note = props.notes.find( n => n.id === parseInt(location.pathname[location.pathname.length-1]))
           return (
            props.user ?
            <div>
              <NavBar />
              <Note 
              {...note}
              /> 
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
    user: state.login.user.username,
    notes: state.notes.notes
  }
}

export default connect(mapStateToProps,null)(App); 