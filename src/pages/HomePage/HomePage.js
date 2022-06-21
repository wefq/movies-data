import { useState } from "react";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { Loading } from "../../components/Loading/Loading.js";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer.js";

export const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isPending, error } = useFetch(`/films?page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<Section>
			{error && <div>{error}</div>}

			{isPending ? <Loading /> : <MovieContainer data={data} currentPage={currentPage} paginate={paginate} />}
		</Section>
	);
};
