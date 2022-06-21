import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { Loading } from "../../components/Loading/Loading.js";

export const MoviePage = () => {
	const { id } = useParams();

	const { data, isPending, error } = useFetch(`/films/${id}`);

	return (
		<Section>
			<h2>{id}</h2>
			{isPending ? <Loading /> : `${data.nameRu} / ${data.nameOriginal}`}
		</Section>
	);
};
