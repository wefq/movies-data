import { Navbar } from "../Navbar/Navbar.js";
import { Search } from "../Search/Search.js";
import style from "./Header.module.scss";

const logo = require("../../assets/action.png");

export const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<div className={style.header__logo}>
					<img src={logo} alt="header-logo" />
				</div>

				<Navbar />
				<Search />
			</div>
		</header>
	);
};
