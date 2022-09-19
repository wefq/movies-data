import { Headline } from "../../Typography/Headline/Headline.js";
import style from "./AboutMore.module.scss";

export const AboutAwards = ({ awards }) => {
	return (
		<div className={style.more_block}>
			<Headline level={3} className={style.more_block__headline}>
				награды и номинации
			</Headline>

			<div className={style.awards}>
				{awards.sort((a, b) => a.name.localeCompare(b.name)).map((award, index) => (
					<div className={style.awards__item} key={index}>
                    «{award.name}» {award.nominationName} {award.persons[0] && award.persons[0].nameRu}
                    </div>
				))}
			</div>
		</div>
	);
};
