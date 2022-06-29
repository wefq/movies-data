import { AboutHeader } from "../components/AboutHeader/AboutHeader.js";
import { AboutDetails } from "../components/AboutDetails/AboutDetails.js";
import { BoxOffice } from "../components/AboutDetails/BoxOffice.js";
import style from "./AboutMain.module.scss";

export const AboutMain = ({ data }) => {
	return (
		<div className={style.container}>
			<div className={style.container__img}>
				<img src={data.posterUrl} alt="movie-poster" />
			</div>

			<div className={style.container__content}>
				<AboutHeader data={data} />
				<AboutDetails data={data} />
				<BoxOffice id={data.kinopoiskId}/>
			</div>
		</div>
	);
};
