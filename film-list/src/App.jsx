import React, { useState } from 'react';
import FilmsList from './components/film-list';

function App() {
  const [showFilms, setShowFilms] = useState(true);

  const handleToggle = () => {
    setShowFilms(!showFilms);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {showFilms ? 'Hide Films' : 'Show Films'}
      </button>
      {showFilms && <FilmsList />}
    </div>
  );
}

export default App;
