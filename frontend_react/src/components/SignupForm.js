import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'

export const SignupForm = ({handleUpdateCurrentUser}) => {

  const [signupValues, setSignupValues] = useState({
    username: "",
    password: "",
    password_confirmation: "",
    name: "",
    capacity: ""
  })

  const history = useHistory()

  const handleInputChange = event => {
    setSignupValues({...signupValues, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (signupValues.password === signupValues.password_confirmation) {
      fetch("http://localhost:3000/venues", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(signupValues)
      })
      .then(r => r.json())
      .then(user => {
        handleUpdateCurrentUser(user)
        history.push({
          pathname: "/"
        })
      })
    }
    else {
      alert("Please make sure your Password and Confirmation match")
    }

  }

      const { username, password, password_confirmation, name, capacity } = signupValues
      
      return (
        <div className="form-container">
        <h3>Sign up for an account</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" onChange={handleInputChange} value={username} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={handleInputChange} value={password} />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" name="password_confirmation" onChange={handleInputChange} value={password_confirmation} />
          </div>
          <div>
            <label>Venue Name:</label>
            <input type="text" name="name" onChange={handleInputChange} value={name} />
          </div>
          <div>
            <label>Venue Capacity:</label>
            <input type="integer" name="capacity" onChange={handleInputChange} value={capacity} />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
      </div>
      )
    
}

export default SignupForm;