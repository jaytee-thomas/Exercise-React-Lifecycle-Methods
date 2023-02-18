import React, { useState, useEffect } from 'react';

function FilmsList() {
  const [list, setList] = useState([]);

  const getFilms = () => {
    fetch('https://studioghibliapi-d6fc8.web.app/films')
      .then(response => response.json())
      .then(data => {
        setList(data);
      })
      .catch(error => {
        console.error('Error fetching films:', error);
      });
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default FilmsList;
