import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";
import { AboutMain } from "../../components/About/AboutMain/AboutMain.js";
import { AboutMore } from "../../components/About/AboutMore/AboutMore.js";

export const MoviePage = () => {
	const { id } = useParams();

	const { data: movie, isPending, error } = useFetch(`/v2.2/films/${id}`);
	const { data: boxOffice } = useFetch(`/v2.2/films/${id}/box_office`);
	const { data: staff } = useFetch(`/v1/staff?filmId=${id}`);

	const data = { movie, boxOffice, staff };

	return (
		<Section>
			<ContentLoaded isPending={isPending} error={error}>
				<AboutMain data={data}/>
				<AboutMore movie={movie} />
			</ContentLoaded>
		</Section>
	);
};
