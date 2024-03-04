import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css"
import leftArrow from '../../Images/left-arrow.png'; // Import the left arrow image

const Header = ({ showCities, selectedCity, setShowCities, setSelectedCity, cities, isSearchPage, setSelectedFilter, setSearchQuery }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleArrowClick = () => {
    setSearchQuery('');
  };

  return (
    <header className={`header ${isSearchPage ? 'search-header' : ''}`}>
      {isSearchPage ? (
        <>
          <div className="search-bar">
            <Link to="/">
              <img src={leftArrow} alt="left arrow" style={{ width: '30px', marginLeft: '5px' }} />
            </Link>
            <input type="text" placeholder="Search movies..." style={{ outlineColor: 'purple', width: '75%', marginLeft: '5px'}} onChange={handleSearchChange} />
            <button 
              style={{ backgroundColor: 'purple' }} 
              onMouseDown={() => setIsClicked(true)} 
              onMouseUp={() => setIsClicked(false)}
              className={isClicked ? 'clicked' : ''}
            >
              Search
            </button>
          </div>
          <div className="search-buttons">
            <button onClick={() => setSelectedFilter('Movies')} style={{ backgroundColor: 'transparent', color: 'purple', border: '2px solid purple' }}>Movies</button>
            <button onClick={() => setSelectedFilter('Theatre')} style={{ backgroundColor: 'transparent', color: 'purple', border: '2px solid purple' }}>Theatre</button>
          </div>
        </>
      ) : (
        <>
          <h1>Hello Parth</h1>
          <div className="city-selector">
            <span onClick={() => setShowCities(!showCities)}>
              {selectedCity} {showCities ? '▲' : '▼'}
            </span>
            {showCities && (
              <ul className="city-dropdown">
                {cities.map(city => (
                  <li key={city} onClick={() => setSelectedCity(city)}>
                    {city}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
