import React from "react";

const Pagination = ({ totalPages, paginate}) => {
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="pagination">
			{pageNumbers.map((number) =>
			 <div onClick={
				 ()=>paginate(number)} 
				 className="pagination-btn" 
				  key={number}>{number}
				</div>)}
		</div>
	);
};

export default Pagination;
