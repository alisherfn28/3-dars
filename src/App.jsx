import React, { useState } from "react";
import data from "./assets/data.json";
import Header from "./components/Header";

function App() {
  const [likeMovie, setLikeMovie] = useState([]);

  const handleClickLike = (id) => {
    if (likeMovie.includes(id)) {
      setLikeMovie(likeMovie.filter((movieId) => movieId !== id));
    } else {
      setLikeMovie([...likeMovie, id]);
    }
  };

  return (
    <div>
      <Header likeCount={likeMovie.length} />
      <div className="container movie__wrapper">
        {data.map((movie) => (
          <div key={movie.id} className="movie__card">
            <div className="movie__wrap">
              <img
                className="movi__pictures"
                src={movie.Images?.[1] || "https://picsum.photos/200/300"}
                alt={`Image of ${movie.Title}`}
              />
              <div className="movie__like">
                <i
                  onClick={() => handleClickLike(movie.id)}
                  className={`fa-heart ${
                    likeMovie.includes(movie.id)
                      ? "fa-solid liked"
                      : "fa-regular"
                  }`}
                ></i>
              </div>
            </div>

            <div className="movie__info">
              <h2 className="movie__title">{movie.Title}</h2>
              <p className="movie__desc">{movie.Plot}</p>
              <div className="movie__card-content">
                <div>
                  <strong>Yil:</strong> {movie.Year}
                </div>
                <div>
                  <strong>Reyting:</strong> {movie.Rated}
                </div>
                <div>
                  <strong>Chiqarilgan sana:</strong> {movie.Released}
                </div>
                <div>
                  <strong>Davomiyligi:</strong> {movie.Runtime}
                </div>
                <div>
                  <strong>Janr:</strong> {movie.Genre}
                </div>
                <div>
                  <strong>Rejissor:</strong> {movie.Director}
                </div>
                <div>
                  <strong>Yozuvchi:</strong> {movie.Writer}
                </div>
                <div>
                  <strong>Aktyorlar:</strong> {movie.Actors}
                </div>
                <div>
                  <strong>Til:</strong> {movie.Language}
                </div>
                <div>
                  <strong>Mamlakat:</strong> {movie.Country}
                </div>
                <div>
                  <strong>Mukofotlar:</strong> {movie.Awards}
                </div>
                <div>
                  <strong>IMDb reytingi:</strong> {movie.imdbRating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
