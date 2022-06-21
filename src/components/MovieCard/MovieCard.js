import { Link } from "react-router-dom";
import style from "./MovieCard.module.scss";

export const MovieCard = ({ movie }) => {
	return (
		<div className={style.movie_card}>
			<div className={style.movie_card__img}>
				<img src={movie.posterUrlPreview} alt="movie-poster" />
			</div>

			<div className={style.movie_card__content}>
				{movie.nameRu ? <h3 className="headline_third">{movie.nameRu}</h3> : <h3>{movie.nameOriginal}</h3>}

				<p className={style.movie_card__year}>{movie.year} год</p>

				<div className={style.movie_card__ratings}>
					<div className={style.movie_card__rating}>
						IMDB: <span className="rating-highlight">{movie.ratingImdb}</span>
					</div>

					<div className={style.movie_card__rating}>
						Kinopoisk: <span className="rating-highlight">{movie.ratingKinopoisk}</span>
					</div>
				</div>
			</div>

			<Link className={style.movie_card__link} to={`/film/${movie.kinopoiskId}`}></Link>
		</div>
	);
};
