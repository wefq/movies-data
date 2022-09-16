import style from "./AboutHeader.module.scss";

const kinopoisk = require("../../../assets/icons/kinopoisk.png");
const imdb = require("../../../assets/icons/imdb.png");

export const AboutRating = ({ rating, votes, type }) => {
	return (
		rating && (
			<div className={style.rating}>
				<div className={style.rating__logo}>
					{type === "kinopoisk" ? <img src={kinopoisk} alt="kinopoisk-logo" /> : <img src={imdb} alt="imdb-logo" />}
				</div>

				<div className={style.rating__numbers}>
					<span className={`${style.rating__value} ${rating > 7 ? style.high : rating > 4 ? style.mid : style.low}`}>{rating}</span>
					<span className={style.rating__votes}>оценок: {votes}</span>
				</div>
			</div>
		)
	);
};
