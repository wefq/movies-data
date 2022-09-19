import { useState } from "react";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { FiltersForm } from "../../components/FiltersForm/FiltersForm.js";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";

export const FiltersPage = () => {
	const [params, setParams] = useState("");
	const [currentPage, setCurrentPage] = useState(1);

	const { data: filters } = useFetch(`/v2.2/films/filters`);
	const GENRES = [];
	const COUNTRIES = [];

	filters && filters.genres.map((item) => GENRES.push({ id: item.id, value: item.genre }));
	filters && filters.countries.map((item) => COUNTRIES.push({ id: item.id, value: item.country }));

	const { data, isPending, error } = useFetch(`/v2.2/films?${params}page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<Section>
			<FiltersForm setCurrentPage={setCurrentPage} setParams={setParams} genresOptions={GENRES} countriesOptions={COUNTRIES} />

			<ContentLoaded isPending={isPending} error={error}>
				<MovieContainer data={data} currentPage={currentPage} paginate={paginate} />
			</ContentLoaded>
		</Section>
	);
};
