import { useFetch } from "../../../useFetch.js";

import { useParams } from "react-router-dom";

export const MovieStaff = ({}) => {
	const { id } = useParams();

	const { data, isPending, error } = useFetch(`/v1/staff?filmId=${id}`);
    console.log(data)

	return <div>MovieStaff</div>;
};
