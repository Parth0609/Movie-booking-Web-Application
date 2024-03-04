import React, { useState, useEffect } from 'react';
import { fetchData } from '../../utility/api'; // path to your API utility file
import { Link } from 'react-router-dom';
import './style.css';
import leftArrow from '../../Images/left-arrow.png';

function BookingLanding({ onTogglePage, movie, onSeatSelectionPage }) {
  const [cinemas, setCinemas] = useState([]);
  const dates = ['04 Feb', '05 Feb', '06 Feb', '07 Feb', '08 Feb'];

  useEffect(() => {
    const theatresUrl = 'https://073790d0-1a59-4ab8-9c94-2bb68aa50bf9.mock.pstmn.io/cinema';
    fetchData(theatresUrl).then((fetchedData) => setCinemas(fetchedData));
  }, []);

  const handleTimeSelect = (cinema, time) => {
    onSeatSelectionPage(cinema, time, movie);
  };

  return (
    <div className="BookingLanding" style={{marginLeft:10}}>
      <div className="header">
        <Link to="/">
          <img src={leftArrow} alt="left arrow" className="left-arrow" />
        </Link>
        <img src={movie.image} alt="movie icon" className="movie-icon" style={{ width: '250px', height: '300px' }} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>{movie.language} | {movie.duration}</p>
      </div>
      <div className="date-buttons">
        {dates.map(date => (
          <button key={date} onClick={() => console.log(`Showing data for ${date}`)} className="date-button">{date}</button>
        ))}
      </div>
      <hr />
      <div className="cinema-buttons booking-scrollable-container">
        {cinemas.map(cinema => (
          <div key={cinema.name}>
            <h2>{cinema.name}</h2>
            <button onClick={() => handleTimeSelect(cinema, '2:00 PM')} className="time-button">2:00 PM</button>
            <button onClick={() => handleTimeSelect(cinema, '5:00 PM')} className="time-button">5:00 PM</button>
            <button onClick={() => handleTimeSelect(cinema, '8:00 PM')} className="time-button">8:00 PM</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingLanding;
