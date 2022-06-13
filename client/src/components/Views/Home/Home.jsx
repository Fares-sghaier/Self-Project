import React from "react";
import ReactDOM from "react-dom";
import { FaHandshake } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Home = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="main_containerr">
      <header className="navbarr">
        <a className="logo">
          <FaHandshake />
          E-Tafakna
        </a>
        <nav className="navbar">
          <Link to="/">
            <a className="nav-link">Home</a>{" "}
          </Link>

          <a className="nav-link" to="/Home">
            Contracts
          </a>
          <a className="nav-link" to="/Home">
            
          </a>
        </nav>
        <nav>
          <button className="white_btnn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Home;
