import { useState, useEffect } from "react";
import useFetch from "./useFetch.js";
import Main from "./entities/Main.js";
import MovieContainer from "./components/MovieContainer.js";
import Pagination from "./components/Pagination.js";
import "./App.scss";

function App() {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isPending, error } = useFetch(`/films?page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<div className="App">
			{error && <div>{error}</div>}
			{isPending && <div>...Loading</div>}

			{data && <MovieContainer data={data} />}
			{data && <Pagination totalPages={data.totalPages} paginate={paginate} />}
		</div>
	);
}

export default App;
