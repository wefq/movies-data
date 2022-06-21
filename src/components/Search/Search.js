import { useState } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../InputField/InputField.js";
import { Button } from "../Button/Button.js";
import style from "./Search.module.scss";

export const Search = () => {
	const [searchWord, setSearchWord] = useState("");

	const handleKey = (e) => {
		if (e.key === "Enter") {
		}
	};

	return (
		<div className={style.search_bar}>
			<InputField type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} onKeyDown={handleKey} />

			<Link children="поиск" to="/search" state={{ stateParam: searchWord }} />
		</div>
	);
};
