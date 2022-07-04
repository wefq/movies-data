import { AboutHeader } from "../components/AboutHeader/AboutHeader.js";
import { AboutDetails } from "../components/AboutDetails/AboutDetails.js";
import { BoxOffice } from "../components/AboutDetails/BoxOffice.js";
import { MovieStaff } from "../components/AboutDetails/MovieStaff.js";
import style from "./AboutMain.module.scss";

export const AboutMain = ({ data }) => {
	return (
		<div className={style.container}>
			<div className={style.container__img}>
				<img src={data.movie.posterUrl} alt="movie-poster" />
			</div>

			<div className={style.container__content}>
				<AboutHeader data={data.movie} />
				<AboutDetails data={data.movie} />
				<BoxOffice boxOffice={data.boxOffice} />
				<MovieStaff type="actor" staff={data.staff} />
			</div>
		</div>
	);
};
