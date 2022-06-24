import { useState } from "react";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { FiltersForm } from "../../components/FiltersForm/FiltersForm.js";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";

export const FiltersPage = () => {
	const [params, setParams] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isPending, error } = useFetch(`/v2.2/films?${params}page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<Section>
			<FiltersForm setCurrentPage={setCurrentPage} setParams={setParams} />

			<ContentLoaded isPending={isPending} error={error}>
				<MovieContainer data={data} currentPage={currentPage} paginate={paginate} />
			</ContentLoaded>
		</Section>
	);
};
