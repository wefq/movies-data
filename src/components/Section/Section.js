import style from "./Section.module.scss";

export const Section = ({ children }) => {
	return (
		<section className={style.section}>
			<div className={style.container}>{children}</div>
		</section>
	);
};
