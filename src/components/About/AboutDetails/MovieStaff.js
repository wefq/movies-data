import { Headline } from "../../Typography/Headline/Headline.js";
import style from "./AboutDetails.module.scss";

export const MovieStaff = ({ staff }) => {
	const displayActors = () => {
		const list = staff.filter((item) => item.professionKey === "ACTOR");
		return list;
	};

	if (staff) {
		const STAFF_EN = [];
		const STAFF_RU = [];
		const STAFF = [];
		
		staff.map((item) => {
			if (!STAFF_EN.includes(item.professionKey)) {
				STAFF_EN.push(item.professionKey);
			}
		});

		staff.map((item) => {
			if (!STAFF_RU.includes(item.professionText)) {
				STAFF_RU.push(item.professionText);
			}
		});

		for (let i = 0; i < STAFF_EN.length; i++) {
			STAFF.push({ nameEn: STAFF_EN[i], nameRu: STAFF_RU[i] });
		}

		// console.log(STAFF);
		// console.log(staff.filter((item) => item.professionKey === "DIRECTOR"));
		// console.log(staff.filter((item) => item.professionKey === "PRODUCER"));
		// console.log(staff.filter((item) => item.professionKey === "WRITER"));
	}

	return (
		<div className={style.list}>
			<ul>
				<Headline level={3}>Актеры</Headline>

				{staff &&
					displayActors()
						.slice(0, 5)
						.map((person) => <li key={person.staffId}>{person.nameRu}</li>)}
			</ul>
		</div>
	);
};
