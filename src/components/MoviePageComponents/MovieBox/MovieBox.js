import style from "./MovieBox.module.scss";
import { MovieHeader } from "../MovieHeader/MovieHeader";
import { MovieDetails } from "../MovieDetails/MovieDetails";

export const MovieBox = ({ data }) => {
	return (
		<div className={style.movie_box}>
			<div className={style.movie_box__img}>
				<img src={data.posterUrl} alt="movie-poster" />
			</div>

			<div className={style.movie_box__content}>
				<MovieHeader data={data} />
				<MovieDetails data={data} />
			</div>
		</div>
	);
};
