______________________SEARCH DRAFT________________________

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import style from "./Search.module.scss";

export const Search = () => {
	const [searchWord, setSearchWord] = useState("");
	const [param, setParam] = useState("");
	const [filtered, setFiltered] = useState([]);

	const { data, isPending, error } = useFetch(`/films?keyword=${param}`);

	const handleSubmit = (e) => {
		e.preventDefault();
		setParam("");
		setParam(searchWord);
	};

	const handleFilter = (e) => {
		setSearchWord(e.target.value);
		const newFilter = data.items.filter((value) => {
			return value.nameRu && value.nameRu.toLowerCase().includes(searchWord.toLowerCase());
		});
		setFiltered(newFilter);
	};

	return (
		<div className={style.search_bar}>
			<form onSubmit={handleSubmit}>
				<input type="text" value={searchWord} onChange={handleFilter} />

				<input type="submit" />
				<Link to="/search" state={{ stateParam: searchWord }}>
					Поиск
				</Link>
			</form>
			{searchWord && <div className={style.search_bar__list}>{data && filtered.map((item, index) => <p key={index}>{item.nameRu}</p>)}</div>}
		</div>
	);
};
______________________SEARCH DRAFT________________________

______________________BUTTON DRAFT________________________

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

______________________BUTTON DRAFT________________________


______________________STAFF LIST__________________________
	const getProffesions = () => {
		const professions = [];
		data.map((item) => {
			if (!professions.includes(item.professionText)) {
				professions.push(item.professionText);
			}
		});
		return professions;
	};

	const vot = () => {
		const profs = getProffesions();

		profs.map((item) => {
			console.log(`____________${item}____________`);
			data.map((staf) => {
				if (staf.professionText === item) {
					console.log(staf.nameEn);
				}
			});
		});
	};
______________________STAFF LIST_________________________