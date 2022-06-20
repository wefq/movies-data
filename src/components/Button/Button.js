import style from "./Button.module.scss";
import { Link } from "react-router-dom";

const Button = ({ type, ...props }) => {
	switch (type) {
		case "link":
			return <Link to={props.href} {...props} className={style.button} />;
		case "button":
			return <button {...props} className={style.button} />;
		case "submit":
			return <input type="submit" {...props} className={style.button} />;
		default:
			console.error(`Button Type: ${type} is not implemented!`);
			break;
	}
};

export default Button;
