import { useState } from "react";
import { Headline } from "../../Typography/Headline/Headline.js";
import { Facts } from "./Facts.js";
import style from "./AboutMore.module.scss";

export const AboutFacts = ({ facts }) => {
	const [closed, setClosed] = useState(true);
	const [hideSpoilers, setHideSpoilers] = useState(true);

	return (
		<div className={style.more_block}>
			<Headline level={3} className={style.more_block__headline}>
				интересные факты:
			</Headline>

			{facts.length > 3 && closed ? (
				<div className={style.facts}>
					<Facts facts={facts.slice(0, 3)} />
				</div>
			) : (
				<div className={style.facts}>
					<Facts facts={facts} hideSpoilers={hideSpoilers} />
				</div>
			)}

			{(facts.find((fact) => fact.spoiler) || facts.length > 3) && (
				<div className={style.facts__btns}>
					{facts.find((fact) => fact.spoiler) && (
						<button className={style.facts__btn} onClick={() => setHideSpoilers((hideSpoilers) => !hideSpoilers)}>
							{hideSpoilers ? "показать спойлеры" : "скрыть спойлеры"}
						</button>
					)}

					{facts.length > 3 && (
						<button className={style.facts__btn} onClick={() => setClosed((closed) => !closed)}>
							{closed ? "развернуть" : "свернуть"}
						</button>
					)}
				</div>
			)}
		</div>
	);
};
