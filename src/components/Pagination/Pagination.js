import style from "./Pagination.module.scss";
import PaginationBtn from "./PaginationBtn.js";
import { Fragment } from "react";

const Pagination = ({ totalPages, currentPage, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className={style.pagination + " container"}>
			{totalPages < 6 &&
				pageNumbers.map((number) => {
					console.log("script worked");
					return <PaginationBtn paginate={paginate} number={number} currentPage={currentPage} key={number} />;
				})}

			{currentPage < 6 && totalPages > 6 && (
				<Fragment>
					{pageNumbers.slice(0, 6).map((number) => (
						<PaginationBtn paginate={paginate} number={number} currentPage={currentPage} key={number} />
					))}

					<PaginationBtn paginate={paginate} number={pageNumbers.length} currentPage={currentPage} />
				</Fragment>
			)}

			{currentPage > 5 && currentPage < totalPages - 4 && totalPages > 6 && (
				<Fragment>
					<PaginationBtn paginate={paginate} number={1} currentPage={currentPage} />

					{pageNumbers.slice(currentPage - 3, currentPage + 2).map((number) => (
						<PaginationBtn paginate={paginate} number={number} currentPage={currentPage} key={number} />
					))}

					<PaginationBtn paginate={paginate} number={pageNumbers.length} currentPage={currentPage} />
				</Fragment>
			)}

			{currentPage > totalPages - 5 && totalPages > 6 &&(
				<Fragment>
					<PaginationBtn paginate={paginate} number={1} currentPage={currentPage} />

					{pageNumbers.slice(pageNumbers.length - 6, pageNumbers.length).map((number) => (
						<PaginationBtn paginate={paginate} number={number} currentPage={currentPage} key={number} />
					))}
				</Fragment>
			)}
		</div>
	);
};

export default Pagination;
