import { useState } from "react";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer.js";

export const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isPending, error } = useFetch(`/v2.2/films?page=${currentPage}`);

	const paginate = (number) => {
		setCurrentPage(number);
	};

	return (
		<Section>
			<ContentLoaded isPending={isPending} error={error}>
				<MovieContainer data={data} currentPage={currentPage} paginate={paginate} />
			</ContentLoaded>
		</Section>
	);
};
