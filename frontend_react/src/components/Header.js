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
                <button className="buttonHeader" onClick={handleLogout}>Logout {currentUser.name}</button>
                <Link to="/profile">
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
        <span className="actions">
          <Link to="/">
          <button className="buttonSubHeader">Lend a Hand</button>
          </Link>
          <button className="buttonSubHeader">Find a Friend</button>
          <Link to="/createtask">
          <button className="buttonSubHeader">Ask For Help</button>
          </Link>
          
        </span>
      </>
        )
    }


export default Header;