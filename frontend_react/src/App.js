import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './components/Header.js'
import LoginForm from './components/LoginForm.js'
import SignupForm from './components/SignupForm.js'
import Dashboard from './components/Dashboard.js'

function App() {

  useEffect(() => {
    
    getAutologin()
  }, [])


  //************** state values  **************/
  // current User 
  const [currentUser, setUser] = useState([])

  //************** functionality  **************/

  const handleLogout = e => {
    fetch("http://localhost:3000/logout", {
      method: "POST",
      credentials: "include"
    })
      .then(r => r.json())
      .then(() => {
        handleUpdateCurrentUser(null)
        
      })
  }

  function handleUpdateCurrentUser(user) {
    setUser(user)
  }

  function getAutologin() {
    fetch("http://localhost:3000/autologin", {
      credentials: "include"
    })
      .then(r => {
        if (!r.ok) {
          throw r
        }
        return r.json()
      })
      .then(user => setUser(user))
      .catch(console.error)
  }

  function fetchVenue(id) {
    fetch(`http://localhost:3000/venues/${id}`)
    .then(r => r.json())
      .then(user => {
        console.log("fetch run", user)
        handleUpdateCurrentUser(user)})   
  }
  

  
  

  return (
    <>
      <Header currentUser={currentUser} handleLogout={handleLogout} handleUpdateCurrentUser={handleUpdateCurrentUser}/>
      <main>
        <Switch>
          <Route exact path='/login' render={(routeProps) => <LoginForm handleUpdateCurrentUser={handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/signup' render={(routeProps) => <SignupForm handleUpdateCurrentUser={handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/dashboard' render={(routeProps) => <Dashboard {...routeProps} fetchVenue={fetchVenue} handleUpdateCurrentUser={handleUpdateCurrentUser} currentUser={currentUser} />} />
        </Switch>
      </main>
    </>
  );
}

export default App;
