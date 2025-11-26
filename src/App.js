import './App.css';
import SearchMovies from './searchMovies';
import { useState } from 'react';
import FavouriteList from "./FavouriteList";

function App() {
  const [favourites, setFavourites] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  
  const addFavourite = movie => {
      setFavourites([...favourites, movie]);
  };
  
  const removeFavourite = movie => {
    setFavourites(favourites.filter(f => f.imdbID !== movie.imdbID))
  }

  const showModal = movie => {
    setSelectedMovie(movie)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMovie(null)
  }

  return (
      <div className="App">
          <SearchMovies addFavourite={addFavourite} />
          <FavouriteList favourites={favourites} removeFavourite={removeFavourite} showModel={showModal}/>
          
          {isModalOpen && selectedMovie && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <button className="modal-close" onClick={closeModal}>&times;</button>
                    <img 
                      className="modal-poster" 
                      src={selectedMovie.Poster !== "N/A" ? selectedMovie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
                      alt={selectedMovie.Title} 
                    />
                    <h2 className="modal-title">{selectedMovie.Title}</h2>
                    <p className="modal-meta">Year: {selectedMovie.Year}</p>
                    <p className="modal-meta">Type: {selectedMovie.Type}</p>
                </div>
            </div>
          )}
      </div>
  );
}


// 6a9af4a3-e331-4927-ba0b-f4f10ce93f8a
export default App;
