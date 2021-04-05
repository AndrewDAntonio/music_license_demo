import React, { useState, useEffect } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import Header from './components/Header.js'
import LoginForm from './components/LoginForm.js'
import SignupForm from './components/SignupForm.js'

function App() {

  useEffect(() => {
    setUser(null)
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

  const handleUpdateCurrentUser = user => {
    setUser(user)
  }

  function getAutologin() {
    fetch("http://localhost:3000//autologin", {
      credentials: "include"
    })
      .then(r => {
        if (!r.ok) {
          throw r
        }
        return r.json()
      })
      .then(user => this.setState({ currentUser: user }))
      .catch(console.error)
  }
  

  return (
    <>
      <Header currentUser={currentUser} handleLogout={handleLogout} handleUpdateCurrentUser={handleUpdateCurrentUser}/>
      <main>
        <Switch>
          <Route exact path='/login' render={(routeProps) => <LoginForm handleUpdateCurrentUser={handleUpdateCurrentUser} {...routeProps} />} />
          <Route exact path='/signup' render={(routeProps) => <SignupForm handleUpdateCurrentUser={handleUpdateCurrentUser} {...routeProps} />} />
        </Switch>
      </main>
    </>
  );
}

export default App;
