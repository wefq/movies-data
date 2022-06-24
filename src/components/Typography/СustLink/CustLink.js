import { Link } from "react-router-dom";
import style from "./CustLink.module.scss";

const types = ["empty" ,"header", "footer", "body"];

export const CustLink = ({ type, href, ...props }) =>
	types.find((item) => item === type) ? (
		<Link {...props} className={`${style.link} ${style[type]}`} to={href} />
	) : (
		console.error(`Link Type: ${type} is not implemented!`)
	);