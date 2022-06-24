import style from "./Paragraph.module.scss";

export const Paragraph = ({ ...props }) => {
	return <p {...props} className={style.text} />;
};
