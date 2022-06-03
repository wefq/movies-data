import React from "react";
import MovieCard from "./MovieCard.js";

const MovieContainer = ({ data, totalPages}) => {

	return (
		<div className="movie-box">
			{data.items.map((movie) => {
				return <MovieCard movie={movie} key={movie.kinopoiskId}/>;
			})}


		</div>
	);
};

export default MovieContainer;
