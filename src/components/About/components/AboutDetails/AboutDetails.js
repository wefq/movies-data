import { Headline } from "../../../Typography/Headline/Headline.js";
import { AboutField } from "./AboutField.js";
import style from "./AboutDetails.module.scss";

export const AboutDetails = ({ data }) => {
	const joinArray = (array, key) => {
		const newArray = [];
		array.map((item) => newArray.push(item[key]));
		return newArray.join(", ");
	};

	return (
		<div className={style.details}>
			<Headline level={3}>О фильме</Headline>
			{data.year && <AboutField title={"Год"} children={data.year} />}
			{data.genres && <AboutField title={"Жанры"} children={joinArray(data.genres, ["genre"])} />}
			{data.countries && <AboutField title={"Страны"} children={joinArray(data.countries, ["country"])} />}
			{data.filmLength && <AboutField title={"Продолжительность"} children={`${data.filmLength} мин.`} />}
			{data.ratingAgeLimits && <AboutField title={"Возраст"} children={`${data.ratingAgeLimits.slice(3)}+`} />}
			{data.slogan && <AboutField title={"Слоган"} children={`«${data.slogan}»`} />}
		</div>
	);
};
