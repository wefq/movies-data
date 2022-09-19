import { AboutHeader } from "../AboutHeader/AboutHeader.js";
import { AboutDetails } from "../AboutDetails/AboutDetails.js";
import { BoxOffice } from "../AboutDetails/BoxOffice.js";
import { MovieStaff } from "../AboutDetails/MovieStaff.js";
import style from "./AboutMain.module.scss";

export const AboutMain = ({ data }) => {
	return (
		data.movie && (
			<div className={style.container}>
				<div className={style.container__img}>
					<img src={data.movie.posterUrl} alt="movie-poster" />
				</div>

				<div className={style.container__content}>
					<AboutHeader data={data.movie} />
					<AboutDetails data={data.movie} />
					<BoxOffice boxOffice={data.boxOffice} />
					<MovieStaff type="actor" staff={data.staff} />
					{/* <MovieStaff type="actor" staff={data.staff} /> */}
				</div>
			</div>
		)
	);
};
