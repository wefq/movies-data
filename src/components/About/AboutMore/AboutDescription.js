import { Headline } from "../../Typography/Headline/Headline";
import style from "./AboutMore.module.scss";

export const AboutDescription = ({ description }) => {
	return (
		<div className={style.more_block}>
			<Headline level={3} className={style.more_block__headline}>синопсис:</Headline>
			<p>{description}</p>
		</div>
	);
};
