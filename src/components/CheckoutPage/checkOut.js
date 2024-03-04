import React from 'react';
import './style.css';
import qrCode from '../../Images/qr.png';
import { Link } from 'react-router-dom'; // Import the Link component

function CheckoutPage({ movie, theatre, time, seats }) {
  return (
    <div className="CheckoutPage">
      {movie ? (
        <>
          <img src={movie.image} alt={movie.title} className="cinema-icon" style={{ width: '250px', height: '300px' }} />
          <h1>{movie.title}</h1>
          <p>{movie.language} | {movie.duration}</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Show Time: {time}</p>
          <p>Seats: {seats.join(', ')}</p>
          <p>Total: ₹{seats.length * 300}</p>
          <img src={qrCode} alt="QR Code" className="qr-code" />
          <p>Use this code for entry.</p>
          <Link to="/"> {/* Add this line */}
            <button>Go Back</button> {/* Add this line */}
          </Link> {/* Add this line */}
        </>
      ) : (
        <p>No movie selected.</p>
      )}
    </div>
  );
}

export default CheckoutPage;
