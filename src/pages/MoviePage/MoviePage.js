import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";
import { AboutMain } from "../../components/About/AboutMain/AboutMain.js";
import { AboutMore } from "../../components/About/AboutMore/AboutMore.js";

export const MoviePage = () => {
	const { id } = useParams();
	const { data, isPending, error } = useFetch(`/v2.2/films/${id}`);

	return (
		<Section>
			<ContentLoaded isPending={isPending} error={error}>
				<AboutMain data={data} />
				<AboutMore data={data} />
			</ContentLoaded>
		</Section>
	);
};
