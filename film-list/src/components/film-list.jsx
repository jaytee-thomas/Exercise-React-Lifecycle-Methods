import React, { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    this.getFilms();
  }

  getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(data => {
        this.setState({ films: data });
      })
      .catch(error => {
        console.error("Error fetching films:", error);
      });
  }

  render() {
    return (
      <ul>
        {this.state.films.map(film => (
          <li key={film.id}>{film.title}</li>
        ))}
      </ul>
    );
  }
}

export default FilmsList;
