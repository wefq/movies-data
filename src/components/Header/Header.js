import Navbar from "../Navbar/Navbar";
import style from "./Header.module.scss";

const logo = require("../../assets/action.png");

const Header = () => {
	return (
		<header className={style.header}>
			<div className={style.header__container + " container"}>
				<div className={style.logo}>
					<img src={logo} alt="" />
				</div>

				<Navbar />
			</div>
		</header>
	);
};

export default Header;
