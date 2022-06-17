import { useState, useEffect } from "react";
import MovieContainer from "../../components/MovieContainer/MovieContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../useFetch";

const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isPending, error } = useFetch(`/films?page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<section className="section">
			{error && <div>{error}</div>}

			{isPending ? <Loading /> : <MovieContainer data={data} />}
			{data && <Pagination totalPages={data.totalPages} currentPage={currentPage} paginate={paginate} />}
		</section>
	);
};

export default HomePage;
