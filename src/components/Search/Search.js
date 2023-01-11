import { useState } from "react";
import { InputField } from "../InputField/InputField.js";
import { CustLink } from "../Typography/СustLink/CustLink.js";
import style from "./Search.module.scss";

export const Search = () => {
	const [searchWord, setSearchWord] = useState("");

	return (
		<div className={style.search_bar}>
			<InputField type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />

			<CustLink type="empty" children="поиск" href="/search" state={{ stateParam: searchWord }} />
		</div>
	);
};
