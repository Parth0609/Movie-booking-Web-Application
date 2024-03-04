// NoBooking.js
import React from 'react';
import './style.css';
import sadFace from '../../Images/sad.png';

function NoBooking() {
  return (
    <div className="NoBooking">
      <img src={sadFace} alt="Sad face" className="sad-face" />
      <p style={{fontSize: '2em' }}>Oh! No booking found!</p>
    </div>
  );
}

export default NoBooking;
