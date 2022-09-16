import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";
import { AboutMain } from "../../components/About/AboutMain/AboutMain.js";
import { AboutMore } from "../../components/About/AboutMore/AboutMore.js";

export const MoviePage = () => {
	const { id } = useParams();

	const { data: movie } = useFetch(`/v2.2/films/${id}`);
	const { data: boxOffice } = useFetch(`/v2.2/films/${id}/box_office`);
	const { data: staff } = useFetch(`/v1/staff?filmId=${id}`);
	const {data: images} = useFetch(`/v2.2/films/${id}/images?type=STILL&page=1`);
	const { data: facts, isPending, error } = useFetch(`/v2.2/films/${id}/facts`);

	const data = { movie, boxOffice, staff, images, facts};

	return (
		<Section>
			<ContentLoaded isPending={isPending} error={error}>
				<AboutMain data={data} />
				<AboutMore data={data} />
			</ContentLoaded>
		</Section>
	);
};
