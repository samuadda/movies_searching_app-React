import FavouriteMovie from "./FavouriteMovie";


function FavouriteList({ favourites, removeFavourite, showModel }) {
    return (
        <div className="favourites-container">
            <h3 className="favourites-title">My Favorite Movies</h3>
            {favourites.length > 0 ? (
                <ul className="movie-grid">
                    {favourites.map(movie => (
                        <FavouriteMovie key={movie.imdbID} movie={movie} removeFavourite={removeFavourite} showModel={showModel} />
                    ))}
                </ul>
            ) : (
                <p className="no-movies">You have no favorite movies yet.</p>
            )}
        </div>
    );
}

export default FavouriteList;