import { Fragment } from "react";
import { MovieCard } from "../MovieCard/MovieCard.js";
import { Pagination } from "../Pagination/Pagination.js";
import style from "./MovieContainer.module.scss";

export const MovieContainer = ({ data, currentPage, paginate }) => {
	return (
		<Fragment>
			<div className={style.movies_box}>
				{data &&
					data.items.map((movie) => {
						return <MovieCard movie={movie} key={movie.kinopoiskId} />;
					})}
			</div>

			<Pagination totalPages={data.totalPages} currentPage={currentPage} paginate={paginate} />
		</Fragment>
	);
};
