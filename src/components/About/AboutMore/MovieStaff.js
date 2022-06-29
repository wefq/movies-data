import { useFetch } from "../../../useFetch.js";

import { useParams } from "react-router-dom";

export const MovieStaff = ({}) => {
	const { id } = useParams();

	const { data, isPending, error } = useFetch(`/v1/staff?filmId=${id}`);

	const getProffesions = () => {
		const professions = [];
		data.map((item) => {
			if (!professions.includes(item.professionText)) {
				professions.push(item.professionText);
			}
		});
		return professions;
	};

	const vot = () => {
		const profs = getProffesions();

		profs.map((item) => {
			console.log(`____________${item}____________`);
			data.map((staf) => {
				if (staf.professionText === item) {
					console.log(staf.nameEn);
				}
			});
		});
	};

	data && vot();

	return <div>MovieStaff</div>;
};
