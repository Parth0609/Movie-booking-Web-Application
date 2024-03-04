import React, { useState, useEffect } from 'react';
import { fetchData } from '../../utility/api'; // path to your API utility file
import { Link } from 'react-router-dom';
import './style.css';
import rightArrow from '../../Images/right-arrow.png';
import cinema from '../../Images/cinema.png'

function HomeScreen({ onBookingPage, searchQuery }) {
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [movies, setMovies] = useState([]);
  const [theatres, setTheatres] = useState([]);

  const languages = ['All', 'English', 'Hindi', 'Tamil', 'Telugu'];

  useEffect(() => {
    const moviesUrl = 'https://073790d0-1a59-4ab8-9c94-2bb68aa50bf9.mock.pstmn.io/movies';
    fetchData(moviesUrl).then((fetchedData) => setMovies(fetchedData));

    const theatresUrl = 'https://073790d0-1a59-4ab8-9c94-2bb68aa50bf9.mock.pstmn.io/cinema';
    fetchData(theatresUrl).then((fetchedData) => setTheatres(fetchedData));
  }, []);

  const filteredMovies = movies && (selectedLanguage === 'All'
  ? movies.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
  : movies.filter(movie => movie.language === selectedLanguage && movie.title.toLowerCase().includes(searchQuery.toLowerCase())));


  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="App">
      <section className="languages">
        {languages.map(language => (
          <button key={language} onClick={() => handleLanguageClick(language)}>{language}</button>
        ))}
      </section>
      <section className="movies" style={{ marginLeft: '10px' }}>
        <div className="title-row">
          <h2>Movies</h2>
          <Link to="/search">
            <img src={rightArrow} alt="right arrow" className="right-arrow-icon" style={{ marginLeft: '10px' }}/>
          </Link>
        </div>
        <div className="row">
          {filteredMovies.map(movie => (
            <div key={movie.id} className="movie" onClick={() => onBookingPage(movie)}>
              <img src={movie.image} alt={movie.title}/>
              <p><strong>{movie.title}</strong></p>
              <p>{movie.language} | {movie.duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="theatres" style={{ marginTop: '85px', marginLeft: '10px' }}>
        <div className="title-row">
          <h2>Theatres</h2>
          <Link to="/search">
            <img src={rightArrow} alt="right arrow" className="right-arrow-icon" style={{ marginLeft: '10px' }} />
          </Link>
        </div>
        <div className="row">
          {theatres.map(theatre => (
            <div key={theatre.name} className="theatre">
              <img src={cinema} alt={theatre.name} />
              <p><strong>{theatre.name}</strong></p>
              <p>{theatre.location}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
