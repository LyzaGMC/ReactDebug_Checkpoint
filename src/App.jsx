// src/App.jsx
import React, { useState } from "react";
import MovieList from "./assets/components/MovieList";
import "./App.css"; // Importation du fichier CSS
// Importation des images
import inceptionImage from "./images/inception.jpg";
import interstellarImage from "./images/intersellar.jpg";
import dunkirkImage from "./images/dunkirk.jpg";
function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      posterURL: inceptionImage,
      description: "A mind-bending thriller",
      rating: 5,
    },
    {
      id: 2,
      title: "Interstellar",
      posterURL: interstellarImage,
      description: "A journey through space and time",
      rating: 4,
    },
    {
      id: 3,
      title: "Dunkirk",
      posterURL: dunkirkImage,
      description: "A World War II thriller",
      rating: 4,
    },
  ]);

  return (
    <div>
      <h1>My Movie Collection</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
