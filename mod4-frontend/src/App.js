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

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch('http://localhost:3000/auto_login', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(user => {
        props.autoLogin(user)
      })
    }
  },[])

  // const loggedIn = () => {
  //   document.title = `You are logged in as ${props.user}`
  //   history.push('/notes')
  // }

  // const notLoggedIn = () => {
  //   document.title ='You are not logged in'
  //   history.push('/login')
  // }

  return (
    <div>
      <Switch>
        
        <Route exact path="/" render={() => {
          return (
            // props.user ?
            <Redirect to="/notes" />
            // :
            // <div>
            // <Redirect to="/login" />
            // </div>
          )
        }}/>
        
        <Route exact path="/login" render={() => {
          return (
            // props.user ?
            // <Redirect to="/notes" />
            // :
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
            // props.user ?
            <div>
              <NavBar />
              <NotesContainer /> 
            </div>
            // :
            // <Redirect to="/login" />
            )}}/>

        <Route exact path="/notes/new" render={() => {
           return (
            // props.user ?
            <div>
              <NavBar />
              <NoteForm /> 
            </div>
            // :
            // <Redirect to="/login" />
            )}}/>
        
        <Route exact path="/note/edit/:id" render={() => {
           return (
            // props.user ?
            <div>
              <NavBar />
              <NoteForm /> 
            </div>
            // :
            // <Redirect to="/login" />
            )}}/>
        
        <Route exact path="/notes/:id" render={() => {
          return (
            // props.user ?
            <div>
              <NavBar />
              <NotesContainer /> 
            </div>
            // :
            // <Redirect to="/login" />
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