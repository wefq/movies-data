import { useState, useEffect } from "react";
import { CustLink } from "../Typography/СustLink/CustLink.js";
import { Toggler } from "../Toggler/Toggler.js";
import style from "./Navbar.module.scss";

export const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleShow = (e) => {
		e.stopPropagation();
		setShow((show) => !show);
	};

	useEffect(() => {
		const handleSideClick = () => setShow((show) => !show);

		if (show) {
			window.addEventListener("click", handleSideClick);
		} else {
			window.removeEventListener("click", handleSideClick);
		}

		return () => window.removeEventListener("click", handleSideClick);
	}, [show]);

	return (
		<nav className={style.navbar}>
			<div className={`${style.nav_list} ${show ? style.show : ""}`}>
				<CustLink type="header" href="/" children="Главная" />

				<CustLink type="header" href="/filters" children="Поиск по фильтрам" />
			</div>

			<Toggler show={show} handleShow={handleShow} />
		</nav>
	);
};
