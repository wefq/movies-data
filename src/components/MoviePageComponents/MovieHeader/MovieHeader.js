import { Headline } from "../../Typography/Headline/Headline.js";
import style from "./MovieHeader.module.scss";

export const MovieHeader = ({ data }) => {
	return (
		<div className={style.movie_header}>
			<Headline level={1}>{data.nameRu ? data.nameRu : data.nameOriginal}</Headline>

			{data.nameRu && <Headline level={2}>{data.nameOriginal}</Headline>}

			<a href={data.webUrl}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
					<polyline points="15 3 21 3 21 9"></polyline>
					<line x1="10" y1="14" x2="21" y2="3"></line>
				</svg>
				Kinopoisk
			</a>
		</div>
	);
};
