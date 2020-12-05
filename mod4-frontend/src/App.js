import './App.css';
import NotesContainer from './containers/NotesContainer'
import NavBar from './components/NavBar'
import NoteForm from './components/NoteForm'
import Note from './components/Note'
import { connect } from 'react-redux'
import Login from './components/Login'
import { Switch, Route,  Redirect } from "react-router-dom"
import React, { useEffect } from 'react'
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

        <Route exact path="/signup" render={() => {
          return (
            <div>
              <NavBar />
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
          let id = location.pathname.split("/")
          id = id[id.length-1]
          let note = props.notes.find( n => n.id === parseInt(id) ) 
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