import { Fragment } from "react";
import { Headline } from "../../Typography/Headline/Headline.js";
import { AboutField } from "./AboutField.js";
import style from "./AboutDetails.module.scss";

export const BoxOffice = ({ boxOffice }) => {
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
				case "MARKETING":
					return { title: "Маркетинг", children: `${item.amount.toLocaleString("ru")}${item.symbol}` };
				default:
					return;
			}
		});

		return newArray;
	};

	return (
		<Fragment>
			{boxOffice && boxOffice.total !== 0 && (
				<div className={style.details}>
					<Headline level={3}>Кассовые сборы</Headline>

					{handleBoxOffice(boxOffice.items).map((item, index) => (
						<AboutField title={item.title} children={item.children} key={index} />
					))}
				</div>
			)}
		</Fragment>
	);
};
