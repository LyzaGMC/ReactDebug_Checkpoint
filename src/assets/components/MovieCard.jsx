// src/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ title, description, rating, posterURL, releaseDate }) => (
  <div className="movie-card">
    <img src={posterURL} alt={`${title} poster`} className="movie-poster" />
    <h2>{title}</h2>
    <p className="release-date">Release Date: {releaseDate}</p>
    <p>{description}</p>
    <p>Rating: {rating}</p>
    <button className="btn">Voir plus</button>
  </div>
);

export default MovieCard;
