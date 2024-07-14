import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Logo from './assets/favicon.png';
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { logout } from "../actions/session";

const NavBar = ({ query }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = event.target.query.value.trim(); // Trim whitespace
    if (searchQuery) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`); // Encode search query
    }
  };

  const handleLogout = () => dispatch(logout());

  return (
    <div className="nav-bar">
      <div className="nav-bar__icon nav-bar__icon--red">
        <Link to="/">
        <img className="logo" src={Logo} alt="MyntraLogo" />
        </Link>
      </div>
      <div className="nav-bar__link">
        <NavLink
          to="/"
          className="nav-bar__link_to_home"
        >
          <div className="home">Home</div>
        </NavLink>
      </div>
      <div className="nav-bar__link">
        <NavLink
          to="/addlook"
          className="nav-bar__link"
        >
          <div className="home">Add Look</div>
        </NavLink>
      </div>
      <div className="nav-bar__link">
        
        <NavLink
          to="/stores"
          className="nav-bar__link"
          activeClassName="nav-bar__link--active"
        >
          <div className="home">Change Store</div>
        </NavLink>
      </div>
      <div className="nav-bar__search-box">
        <SearchIcon />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            name="query"
            defaultValue={query || ""}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="nav-bar__icon-group">
        
        <div className="nav-bar__icon nav-bar__icon--gray">
          <Link to="/CollabCart">
            <ShoppingBagIcon />
          </Link>
        </div>
        <div className="nav-bar__icon nav-bar__icon--gray">
          <Link to="/profile">
            <AccountCircleIcon />
          </Link>
        </div>
        <div className="nav-bar__icon nav-bar__icon--gray" onClick={handleLogout}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
