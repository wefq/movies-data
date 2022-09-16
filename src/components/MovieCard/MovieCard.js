import { Link } from "react-router-dom";
import { Headline } from "../Typography/Headline/Headline.js";
import style from "./MovieCard.module.scss";

export const MovieCard = ({ movie }) => {
	return (
		<div className={style.movie_card}>
			<div className={style.movie_card__img}>
				<img src={movie.posterUrlPreview} alt="movie-poster" />
			</div>

			<div className={style.movie_card__content}>
				<Headline level={3}>{movie.nameRu ? movie.nameRu : movie.nameOriginal}</Headline>

				<p className={style.movie_card__year}>{movie.year} год</p>

				<div className={style.movie_card__ratings}>
					{movie.ratingImdb && (
						<div className={style.movie_card__rating}>
							IMDB: <span className="rating-highlight">{movie.ratingImdb}</span>
						</div>
					)}
					{movie.ratingKinopoisk && <div className={style.movie_card__rating}>
						Kinopoisk: <span className="rating-highlight">{movie.ratingKinopoisk}</span>
					</div>}
				</div>
			</div>

			<Link className={style.movie_card__link} to={`/film/${movie.kinopoiskId}`} />
		</div>
	);
};
