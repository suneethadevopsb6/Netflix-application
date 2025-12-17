import React, { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://backend-service:5000/api/movies")
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div style={{ background: "black", color: "white", padding: "20px" }}>
      <h1>Netflix Clone</h1>
      <div style={{ display: "flex" }}>
        {movies.map(movie => (
          <div key={movie.title}>
            <img src={movie.thumbnail} alt="" />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
