import { useFetch } from "../../../../useFetch.js";
import { Fragment } from "react";
import { Headline } from "../../../Typography/Headline/Headline.js";
import { AboutField } from "./AboutField.js";
import style from "./AboutDetails.module.scss";

export const BoxOffice = ({ id }) => {
	const { data } = useFetch(`/v2.2/films/${id}/box_office`);

	const handleBoxOffice = (items) => {
		const newArray = items.map((item) => {
			switch (item.type) {
				case "BUDGET":
					return { title: "Бюджет", children: `${item.amount.toLocaleString("ru")}${item.symbol}` };
				case "WORLD":
					return { title: "Сборы в мире", children: `${item.amount.toLocaleString("ru")}${item.symbol}` };

				case "RUS":
					return { title: "Сборы в России", children: `${item.amount.toLocaleString("ru")}${item.symbol}` };

				case "USA":
					return { title: "Сборы в США", children: `${item.amount.toLocaleString("ru")}${item.symbol}` };

				default:
					break;
			}
		});

		return newArray;
	};

	return (
		<Fragment>
			{data && data.total !== 0 && (
				<div className={style.details}>
					<Headline level={3}>Кассовые сборы</Headline>

					{handleBoxOffice(data.items).map((item, index) => (
						<AboutField title={item.title} children={item.children} key={index} />
					))}
				</div>
			)}
		</Fragment>
	);
};
