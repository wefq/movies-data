import style from "./MovieDetails.module.scss";
import { Headline } from "../../Typography/Headline/Headline";
import { MovieStaff } from "../MovieStaff/MovieStaff";

export const MovieDetails = () => {
	return (
		<div className={style.details}>
			<Headline level={3}>О фильме</Headline>

			<MovieStaff/>
		</div>
	);
};
