import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({currentUser,handleLogout}) => {

        return (
          <>
            <header>
              <Link to="/">
                <button className="buttonLogo">SangCash</button>
              </Link>

                 <span className="actions">
                {currentUser ? (
            <>
                <Link to="/about_us">
                  <button className="buttonHeader">About Us</button>
                </Link>
                <Link to="/">
                  <button className="buttonHeader" onClick={handleLogout}>Logout {currentUser.username}</button>
                </Link>
                <Link to="/dashboard">
                  <button className="buttonLogo">Dashboard</button>
                </Link>
            </>
          ) : (
              <>
                <Link to="/about_us">
                  <button className="buttonHeader">About Us </button>
                </Link>
                <Link to="/login">
                  <button className="buttonHeader">Login</button>
                </Link>
                <Link to="/signup">
                  <button className="buttonHeader">SignUp</button>
                </Link>
              </>
            )}
        </span>
      </header>
      </>
        )
    }


export default Header;