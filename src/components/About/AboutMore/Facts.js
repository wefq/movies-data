import { Fragment } from "react";
import style from "./AboutMore.module.scss";

export const Facts = ({ facts, hideSpoilers }) => {
	const regex = /<.+?>|&[r|l]aquo;|&#[0-9]+;/gm;
    
	return (
		<Fragment>
			{facts.map((fact, index) => (
				<span className={`${style.facts__item} ${fact.spoiler && hideSpoilers ? style.spoiler : ""}`} key={index}>
					{fact.text.replace(regex, "")}
				</span>
			))}
		</Fragment>
	);
};
