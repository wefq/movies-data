import { Link } from "react-router-dom";
import { CustLink } from "../Typography/СustLink/CustLink";
import style from "./Navbar.module.scss";

export const Navbar = () => {
	return (
		<nav>
			<ul className={style.nav_list}>
				<li>
					<CustLink type="header" href="/" children="Главная" />
				</li>

				<li>
					<CustLink type="header" href="/filters" children="Поиск по фильтрам" />
				</li>
			</ul>
		</nav>
	);
};
