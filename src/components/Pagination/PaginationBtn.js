import style from "./Pagination.module.scss";

export const PaginationBtn = ({ paginate, number, currentPage }) => {
	return (
		<div onClick={() => paginate(number)} className={style.pagination__btn + " " + (currentPage === number ? style._active : "")}>
			{number}
		</div>
	);
};
