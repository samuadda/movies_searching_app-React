function FavouriteMovie({ movie, removeFavourite, showModel }) {

    const handleRemove = e => {
        e.stopPropagation()
        removeFavourite(movie)
    }

    const handleShowModel =_=> {
        showModel(movie)
    }
    return (
        <li className="movie-card" onClick={handleShowModel}>
            <img 
                className="movie-poster" 
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
                alt={movie.Title} 
            />
            <div className="movie-info">
                <h4 className="movie-title">{movie.Title}</h4>
                <p className="movie-year">{movie.Year}</p>
            </div>
            <button className="remove-btn" onClick={handleRemove}>Remove</button>
        </li>
    );
}

export default FavouriteMovie;
