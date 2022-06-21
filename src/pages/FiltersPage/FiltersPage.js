import { useState } from "react";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { FiltersForm } from "./FiltersForm/FiltersForm.js";
import { Loading } from "../../components/Loading/Loading.js";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer.js";

export const FiltersPage = () => {
	const [params, setParams] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isPending, error } = useFetch(`/films?${params}page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<Section>
			<FiltersForm setCurrentPage={setCurrentPage} setParams={setParams} />

			{isPending ? <Loading /> : <MovieContainer data={data} currentPage={currentPage} paginate={paginate} />}
		</Section>
	);
};
