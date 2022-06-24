import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";
import { MovieBox } from "../../components/MoviePageComponents/MovieBox/MovieBox.js";

export const MoviePage = () => {
	const { id } = useParams();

	const { data, isPending, error } = useFetch(`/v2.2/films/${id}`);

	return (
		<Section>
			<ContentLoaded isPending={isPending} error={error}>
				<MovieBox data={data}></MovieBox>
			</ContentLoaded>
		</Section>
	);
};
