import { AboutName } from "./AboutName.js";
import { AboutRating } from "./AboutRating.js";
import style from "./AboutHeader.module.scss";

export const AboutHeader = ({ data }) => {
	return (
		<div className={style.container}>
			<AboutName data={data} />

			<div className={style.description_ratings}>
				<AboutRating type="kinopoisk" rating={data.ratingKinopoisk} votes={data.ratingKinopoiskVoteCount} />
				<AboutRating type="imdb" rating={data.ratingImdb} votes={data.ratingImdbVoteCount} />
			</div>
		</div>
	);
};
