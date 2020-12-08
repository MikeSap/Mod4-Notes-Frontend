import './App.css';
import NotesContainer from './containers/NotesContainer'
import NavBar from './components/NavBar'
import NoteForm from './components/NoteForm'
import { connect } from 'react-redux'
import Login from './components/Login'
import { Switch, Route,  Redirect } from "react-router-dom"
import React, { useEffect } from 'react'
import { autoLogin } from './actions';


const App = (props) => {

  const { autoLogin } = props

  useEffect(() => {
    autoLogin()
  },[autoLogin])

  return (

    <div>
      <Switch>
        
        <Route exact path="/" render={() => {
          return (
            props.user ?
            <Redirect to='/notes' /> :
            <Redirect to='/login' />
          )
        }}/>
        
        <Route exact path="/login" render={() => {
          return (
            <div>
              <NavBar />
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
            <div>
              <NavBar />
              <NotesContainer /> 
            </div>
            )}}/>

        <Route exact path="/notes/new" render={() => {
           return (
            <div>
              <NavBar />
              <NoteForm /> 
            </div>
            )}}/>
        
        <Route exact path="/note/edit/:id" render={() => {
           return (
            <div>
              <NavBar />
              <NoteForm /> 
            </div>
            )}}/>
        
        <Route exact path="/notes/:id" render={() => {
          return (
            <div>
              <NavBar />
              <NotesContainer /> 
            </div>
            )}}/>

      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user.id,
    notes: state.notes,
    loading: state.loading
  }
}

export default connect(mapStateToProps, ({ autoLogin }))(App); 