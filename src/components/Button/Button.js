import style from "./Button.module.scss";

const types = ["accent", "primary"];

export const Button = ({ btn, ...props }) =>
	types.find((item) => item === btn) ? (
		<button {...props} className={`${style.button} ${btn}`} />
	) : (
		console.error(`Button Type: ${btn} is not implemented!`)
	);
