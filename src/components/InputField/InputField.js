import style from "./InputField.module.scss";

export const InputField = ({ type, ...props }) => {
	return <input className={style.filter_range__input} {...props} />;
};
