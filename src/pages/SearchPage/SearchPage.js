import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";

export const SearchPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const paginate = (number) => {
		setCurrentPage(number);
	};

	const param = useLocation().state.stateParam;

	useEffect(() => {
		setCurrentPage(1);
	}, [param]);

	const { data, isPending, error } = useFetch(`/v2.2/films?keyword=${param}&page=${currentPage}`);

	return (
		<Section>
			<ContentLoaded isPending={isPending} error={error}>
				<MovieContainer data={data} currentPage={currentPage} paginate={paginate} />
			</ContentLoaded>
		</Section>
	);
};
