import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'

export const LoginForm = ({handleUpdateCurrentUser}) => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: ""
  })
  
  const history = useHistory()

  const handleInputChange = event => {
    setFormValues({...formValues, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
   
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(formValues)
      })
      .then(r => {
        if (!r.ok) {
          throw r
        }
        return r.json()
      })
      .then(user => {
        handleUpdateCurrentUser(user)
        history.push({
          pathname: "/"
        })
      })
  }
  
   
      const { username, password } = formValues

      return (
        <div className="form-container">
        
        <h3>Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input type="text" name="username" onChange={handleInputChange} value={username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={handleInputChange} value={password} />
          <input type="submit" value="Login" />
        </form>
        <Link to={`/signup`}>
          <button className="buttonHeader">Don't have an Account? Click here to Signup!</button>
        </Link>
      </div>
      )
    
}

export default LoginForm;