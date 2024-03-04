import React, { useState, useEffect } from 'react';
import { fetchData } from '../../utility/api'; // path to your API utility file
import './style.css';
import cinema from '../../Images/cinema.png';

function SearchScreen({ selectedFilter, onBookingPage, searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    const moviesUrl = 'https://073790d0-1a59-4ab8-9c94-2bb68aa50bf9.mock.pstmn.io/movies'; // your mock API url
    fetchData(moviesUrl).then((fetchedData) => setMovies(fetchedData));

    const theatresUrl = 'https://073790d0-1a59-4ab8-9c94-2bb68aa50bf9.mock.pstmn.io/cinema'; // replace with your cinema API endpoint
    fetchData(theatresUrl).then((fetchedData) => setTheatres(fetchedData));
  }, []);

  const items = selectedFilter === 'Movies' ? movies : theatres;

  const filteredItems = items.filter(item => (item.title || item.name).toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="Search_Screen">
      <div className="content">
        <div className="scrollable-container">
          {filteredItems.map(item => (
            <div key={item.id} className="item" style={{ marginLeft: '10px', marginBottom: '10px' }} onClick={() => selectedFilter === 'Movies' && onBookingPage(item)}>
              <img src={selectedFilter === 'Movies' ? item.image : cinema} alt={item.name}/>
              <div>
                <h3>{item.title || item.name}</h3>
                {(item.language || item.location) && <p>{item.language || item.location}</p>}
                {item.duration && <p>{item.duration}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchScreen;
