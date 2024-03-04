Movie Booking Application
This project is a comprehensive movie booking application built using React.js. It provides a seamless user interface for users to browse movies, select a movie, choose a cinema, select seats, and finally, view their booking details.


Features:
1. Movie Browsing: Users can browse through a list of movies. Each movie has detailed information including title, language, and duration.
2. Search Functionality: Users can search for movies using the search bar. The search results are dynamically updated as the user types.
3. Booking Process: Users can book a movie by selecting a cinema and showtime. They can then choose their preferred seats.
4. Booking Details: After booking, users can view their booking details, including the movie, cinema, showtime, and selected seats.

   
Technologies Used:
1. React.js: The entire frontend of the application is built using React.js. It uses functional components and hooks for state management.
2. React Hooks: The application uses several React Hooks:
    useState: This hook is used to add state to the functional components. It’s used to keep track of variables such as the selected movie, selected cinema, selected time, and selected seats.
    useEffect: This hook is used to perform side effects in the components. It’s used to fetch data from an API when the component mounts.
3. React Router: React Router is used for navigation between different pages (Home, Search, Booking, Seat Selection, and Checkout).
4. CSS: All the styling is done using CSS. Each component has its own CSS file for encapsulated styling.
