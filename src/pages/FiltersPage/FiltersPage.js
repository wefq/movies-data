import { useState } from "react";
import MovieContainer from "../../components/MovieContainer/MovieContainer.js";
import Pagination from "../../components/Pagination/Pagination.js";
import FiltersForm from "./FiltersForm/FiltersForm.js";
import useFetch from "../../useFetch.js";
import Loading from "../../components/Loading/Loading.js";

const FiltersPage = () => {
	const [params, setParams] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isPending, error } = useFetch(`/films?${params}page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<section className="section">
			<FiltersForm setCurrentPage={setCurrentPage} setParams={setParams} />

			{isPending ? <Loading /> : <MovieContainer data={data} />}
			{data && <Pagination totalPages={data.totalPages} currentPage={currentPage} paginate={paginate} />}
		</section>
	);
};

export default FiltersPage;
