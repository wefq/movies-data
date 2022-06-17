import MovieCard from "../MovieCard/MovieCard.js";
import style from "./MovieContainer.module.scss";

const MovieContainer = ({ data, totalPages }) => {
	return (
		<div className={style.movie_box + " container"}>
			{data &&
				data.items.map((movie) => {
					return <MovieCard movie={movie} key={movie.kinopoiskId} />;
				})}
		</div>
	);
};

export default MovieContainer;
