import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import cinemaScreen from '../../Images/cinema-screen.png';
import leftArrow from '../../Images/left-arrow.png';
import partyGif from '../../Images/holidays-party.gif';

function SeatSelection({ theatre, movie, time, onBack, onCheckout }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSeatClick = (seatLabel) => {
    if (selectedSeats.includes(seatLabel)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatLabel));
    } else {
      setSelectedSeats([...selectedSeats, seatLabel]);
    }
  };

  const handleBookClick = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      onCheckout(selectedSeats);
    }, 2500);
  };

  return (
    <div className={`SeatSelection ${bookingConfirmed ? 'booking-confirmed' : ''}`}>
      {bookingConfirmed ? (
        <>
          <img src={partyGif} alt="Party" className="party-gif" />
          <h2 className="confirmation-text">Congratulations! Your movie is booked! Have a good time.</h2>
        </>
      ) : (
        <>
          <Link to="/">
            <img src={leftArrow} alt="Back" className="back-button" />
          </Link>
          <img src={cinemaScreen} alt="Cinema Screen" className="cinema-screen" />
          <div className="movie-details">
            <h1>{theatre.name}</h1>
            <h2>{movie.title}</h2>
            <p>{movie.language} | {movie.duration}</p>
            <p>Show Time: {time}</p>
          </div>
          <div className="seating-chart">
            {[...Array(120)].map((_, i) => {
              const row = String.fromCharCode(65 + Math.floor(i / 12)); // 'A', 'B', 'C', ...
              const number = i % 12 + 1; // 1, 2, 3, ...
              const seatLabel = `${row}${number}`; // 'A1', 'A2', ...

              return (
                <button 
                  key={i} 
                  className={`seat ${selectedSeats.includes(seatLabel) ? 'selected' : ''}`}
                  onClick={() => handleSeatClick(seatLabel)}
                >
                  {seatLabel}
                </button>
              );
            })}
          </div>
          <button className="book-button" onClick={handleBookClick}>BOOK for ₹{selectedSeats.length * 300}</button>
        </>
      )}
    </div>
  );
}

export default SeatSelection;
