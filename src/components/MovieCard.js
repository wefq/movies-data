import React from "react";

const MovieCard = ({ movie }) => {
	
	return (
		<div className="movie-card">
			<div className="movie-card__img">
				<img src={movie.posterUrlPreview} alt="movie-poster" />
			</div>

			<div className="movie-card__content">
				{movie.nameRu ? <h4 className="movie-card__name">{movie.nameRu}</h4> : <h4>{movie.nameOriginal}</h4>}

				<p className="movie-card__year">{movie.year} год</p>
                
				<div className="movie-card__ratings">
					<div className="movie-card__rating">
						IMDB: <span className="rating-highlight">{movie.ratingImdb}</span>
					</div>

					<div className="movie-card__rating">
						Kinopoisk: <span className="rating-highlight">{movie.ratingKinopoisk}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
