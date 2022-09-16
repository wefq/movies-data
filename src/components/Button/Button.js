import style from "./Button.module.scss";

const types = ["accent", "primary"];

export const Button = ({ type, ...props }) =>
	types.find((item) => item === type) ? (
		<button {...props} className={`${style.button} ${style[type]} ${props.className ? props.className : ""}`} />
	) : (
		console.error(`Button Type: ${type} is not implemented!`)
	);
