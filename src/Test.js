import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

import style from "./Test.module.scss";

export const Test = () => {
	const [text, setText] = useState("");
	const [genres, setGenres] = useState([]);
	const [showList, setShowList] = useState(false);
	const { data, isPending, error } = useFetch(`/v2.2/films/filters`);

	useEffect(() => {
		data && setGenres(data.genres);
	}, [data]);

	const filteredGenres = genres.filter((item) => {
		return item.genre.toLowerCase().includes(text.toLowerCase());
	});

	const handleInput = (e) => {
		setText(e.target.value);
	};

	const handleClickInput = (e) => {
		e.stopPropagation();
		e.target.id === "filter" ? setShowList(true) : setShowList(false);
	};

	const handleClickItem = (e) => {
		console.log(e.target.innerText);
		setText(e.target.innerText);
		setShowList(false);
	};

	useEffect(() => {
		const handleWindowClick = () => setShowList(false);

		if (showList) {
			window.addEventListener("click", handleWindowClick);
		} else {
			window.removeEventListener("click", handleWindowClick);
		}

		return () => window.removeEventListener("click", handleWindowClick);
	}, [showList, setShowList]);

	return (
		<div>
			<div className={style.filter}>
				<div className={style.filter__input_box}>
					<input className={style.filter} type="text" id="filter" value={text} onChange={handleInput} onClick={handleClickInput} />

					{showList && <span>&#215;</span>}
				</div>

				{showList && (
					<div className={style.filter__list}>
						{filteredGenres.map((item) => (
							<div className={style.filter__list__item} key={item.id} onClick={handleClickItem}>
								{item.genre}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
