import React, { useState } from "react";

function SearchMovies({ addFavourite }) {
	const [movieTitle, setMovieTitle] = useState("");
	const [error, setError] = useState(null);

	const findMovie = async (e) => {
		e.preventDefault();
		const url = `https://www.omdbapi.com/?apikey=209aaa1d&s=${movieTitle}`; // <== API KEY

		try {
			setError(null);
			const response = await fetch(url);
			const data = await response.json();
			if (data.Search) {
				addFavourite(data.Search[0]);
			} else {
				setError(data.Error || "No movies found");
			}
		} catch (err) {
			console.log(err);
			setError("Failed to fetch movies. Please try again.");
		}
	};

	return (
		<>
			<form className="search-form" onSubmit={findMovie}>
				<label className="search-label" htmlFor="query">
					Movie Title
				</label>
				<input
					className="search-input"
					type="text"
					name="query"
					value={movieTitle}
					onChange={(e) => setMovieTitle(e.target.value)}
					placeholder="Enter a movie name..."
					role="search"
				/>
				<button className="search-button" type="submit">
					Search
				</button>
				{error && <div className="search-error">{error}</div>}
			</form>
		</>
	);
}

export default SearchMovies;
