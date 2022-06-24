import style from "./Headline.module.scss";

export const Headline = ({ level, ...props }) => {
	switch (level) {
		case 1:
			return <h1 {...props} className={`${style.headline_first} ${props.className}`} />;
		case 2:
			return <h2 {...props} className={`${style.headline_second} ${props.className}`} />;
		case 3:
			return <h3 {...props} className={`${style.headline_third} ${props.className}`} />;
		case 4:
			return <h4 {...props} className={`${style.headline_fourth} ${props.className}`} />;
		default:
			return;
	}
};
