import style from "./AboutDetails.module.scss";

export const AboutField = ({ title, children }) => {
	return (
		<div className={style.field}>
			<span>{title}</span>
			<p>{children}</p>
		</div>
	);
};
