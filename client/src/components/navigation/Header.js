import toast, { Toaster } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import './Header.css'

const Header = ({ currentUser, handleLogout }) => {
  return (
    <>
    <Toaster />
    <div className='navigation'>
      <nav className="navbar">

        <NavLink to='/'>Meowstar</NavLink> <br></br>
        <>
          {currentUser ? (
            <div className="container">
              <NavLink to={`/users/${currentUser.id}`}>
                Profile
              </NavLink> <br></br>
              <NavLink onClick={handleLogout}>Logout</NavLink>
            </div> 
          ) : (
            <Link to={"/registration"}>
              Login / Sign up
            </Link>
          )}
        </>
      </nav>
    </div>
    </>
  );
};

export default Header;
