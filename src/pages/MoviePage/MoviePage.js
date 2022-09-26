import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";
import { AboutMain } from "../../components/About/AboutMain/AboutMain.js";
import { AboutMore } from "../../components/About/AboutMore/AboutMore.js";

export const MoviePage = () => {
	const { id } = useParams();

	const { data: boxOffice } = useFetch(`/v2.2/films/${id}/box_office`);
	const { data: staff } = useFetch(`/v1/staff?filmId=${id}`);
	const { data: images } = useFetch(`/v2.2/films/${id}/images?type=STILL&page=1`);
	const { data: awards } = useFetch(`/v2.2/films/${id}/awards`);
	const { data: facts } = useFetch(`/v2.2/films/${id}/facts`);
	const { data: movie, isPending, error } = useFetch(`/v2.2/films/${id}`);

	const main = { movie, boxOffice, staff };
	const more = { movie, images, facts, awards };
	

	return (
		<Section>
			<ContentLoaded isPending={isPending} error={error}>
				{movie && boxOffice && staff && <AboutMain data={main} />}
				{movie && images && facts && awards && <AboutMore data={more} />}
			</ContentLoaded>
		</Section>
	);
};
