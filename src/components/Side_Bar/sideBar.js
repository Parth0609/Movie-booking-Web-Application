import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import profile from '../../Images/profile-user.png';
import movie_search from '../../Images/movie-clapper-open.png';
import search_icon from '../../Images/search-interface-symbol.png';
import booking_list from '../../Images/folder.png';

const Sidebar = ({ activePage, isMovieBooked }) => { // Add isMovieBooked here
  return (
    <div className="sidebar">
      <div className={`sidebar-item ${activePage === 'Home' ? 'active' : ''}`} >
        <Link to="/search">
          <img src={movie_search} alt="Movies" className="icon" />
          <span className="icon-label" >Movies</span>
        </Link>
      </div>
      <div className={`sidebar-item ${activePage === 'Search' ? 'active' : ''}`}>
        <Link to="/search">
          <img src={search_icon} alt="Search" className="icon" />
          <span className="icon-label">Search</span>
        </Link>
      </div>
      <div className={`sidebar-item ${activePage === 'NoBooking' ? 'active' : ''}`}>
        <Link to={isMovieBooked ? "/checkout" : "/noBooking"}>
          <img src={booking_list} alt="My Bookings" className="icon" />
          <span className="icon-label">Bookings</span>
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/account">
          <img src={profile} alt="Account" className="icon" />
          <span className="icon-label">Account</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
