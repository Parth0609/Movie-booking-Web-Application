import React, { useState } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Sidebar from './components/Side_Bar/sideBar';
import HomeScreen from './components/Home_Screen/homeScreen';
import Header from './components/Header/header';
import SearchScreen from './components/Search_Screen/searchScreen';
import BookingLanding from './components/Booking_Landing/bookingLanding';
import SeatSelection from './components/Seat_Selection/seatSelection';
import CheckoutPage from './components/CheckoutPage/checkOut';
import NoBooking from './components/NoBooking/noBooking'; // Import the NoBooking component

import './App.css';

const App =(props) => {

  const [showCities, setShowCities] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
  const [selectedFilter, setSelectedFilter] = useState('Movies');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isMovieBooked, setIsMovieBooked] = useState(false); // Add this line

  const isSearchPage = props.location.pathname === '/search';

  const onBookingPage = (movie) => {
    setSelectedMovie(movie);
    props.history.push('/booking');
  };

  const onSeatSelectionPage = (cinema, time) => {
    setSelectedCinema(cinema);
    setSelectedTime(time);
    props.history.push('/seat-selection');
  };

  const onCheckout = (seats) => {
    setSelectedSeats(seats);
    setIsMovieBooked(true); // Add this line
    props.history.push('/checkout');
  };

  return (
    <div className="App">
      <Header
        showCities={showCities}
        selectedCity={selectedCity}
        setShowCities={setShowCities}
        setSelectedCity={setSelectedCity}
        cities={cities}
        isSearchPage={isSearchPage}
        setSelectedFilter={setSelectedFilter}
        setSearchQuery={setSearchQuery}
      />
      <div className="content-container">
        <Sidebar isMovieBooked={isMovieBooked} /> {/* Pass the isMovieBooked state as a prop */}
        <Switch>
          <Route path="/" exact>
            <HomeScreen
              onBookingPage={onBookingPage}
              searchQuery={searchQuery}
            />
          </Route>
          <Route path="/search">
            <SearchScreen
              selectedFilter={selectedFilter}
              searchQuery={searchQuery}
              onBookingPage={onBookingPage}
            />
          </Route>
          <Route path="/booking">
            <BookingLanding
              movie={selectedMovie}
              onSeatSelectionPage={onSeatSelectionPage}
            />
          </Route>
          <Route path="/seat-selection">
            <SeatSelection
              theatre={selectedCinema}
              movie={selectedMovie}
              time={selectedTime}
              onCheckout={onCheckout}
            />
          </Route>
          <Route path="/checkout">
            <CheckoutPage
              movie={selectedMovie}
              theatre={selectedCinema}
              time={selectedTime}
              seats={selectedSeats}
            />
          </Route>
          <Route path="/noBooking">
            <NoBooking /> {/* Add this route */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
