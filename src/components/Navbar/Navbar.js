import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";

export const Navbar = () => {
	return (
		<nav>
			<ul className={style.nav_list}>
				<li>
					<Link className="header_link" to="/">
						Главная
					</Link>
				</li>
				<li>
					<Link className="header_link" to="/filters">
						Поиск по фильтрам
					</Link>
				</li>
			</ul>
		</nav>
	);
};
