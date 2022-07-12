import { useState } from "react";
import { useFetch } from "../../useFetch.js";
import { FiltersSelect } from "./FiltersSelect.js";
import { FiltersRange } from "./FiltersRange.js";
import { Button } from "../Button/Button.js";
import style from "./FiltersForm.module.scss";

export const FiltersForm = ({ setCurrentPage, setParams }) => {
	const [genre, setGenre] = useState("");
	const [country, setCountry] = useState("");

	const [yearFrom, setYearFrom] = useState("");
	const [yearTo, setYearTo] = useState("");

	const [ratingFrom, setRatingFrom] = useState("");
	const [ratingTo, setRatingTo] = useState("");

	const { data, isPending, error } = useFetch(`/v2.2/films/filters`);

	const GENRE_OPTIONS = [];
	const COUNTRY_OPTIONS = [];

	data && data.genres.map((item) => GENRE_OPTIONS.push({ id: item.id, value: item.genre }));
	data && data.countries.map((item) => COUNTRY_OPTIONS.push({ id: item.id, value: item.country }));

	const handleGenreChange = (value) => {
		setGenre(value);
	};
	const handleCountryChange = (value) => {
		setCountry(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setParams("");
		let parameters = "";
		const fieldsValues = [];

		const findGenre = GENRE_OPTIONS.find((item) => item.value === genre);
		const findCountry = COUNTRY_OPTIONS.find((item) => item.value === country);

		findGenre.value && fieldsValues.push({ paramName: "genres", paramId: findGenre.id });
		findCountry.value && fieldsValues.push({ paramName: "countries", paramId: findCountry.id });

		yearFrom && fieldsValues.push({ paramName: "yearFrom", paramId: yearFrom });
		yearTo && fieldsValues.push({ paramName: "yearTo", paramId: yearTo });

		ratingFrom && fieldsValues.push({ paramName: "ratingFrom", paramId: ratingFrom });
		ratingTo && fieldsValues.push({ paramName: "ratingTo", paramId: ratingTo });

		fieldsValues.forEach((param) => {
			parameters = parameters + param.paramName + "=" + param.paramId + "&";
		});

		setParams(parameters);
		setCurrentPage(1);
	};

	const handleClear = () => {
		setGenre("");
		setCountry("");
		setYearFrom("");
		setYearTo("");
		setRatingFrom("");
		setRatingTo("");
	};

	return (
		<form className={style.filters + " container"} onSubmit={handleSubmit}>
			<div className={style.filters__form_group}>
				<FiltersSelect options={GENRE_OPTIONS} value={genre} onChange={handleGenreChange} name={"Жанр"} />

				<FiltersSelect options={COUNTRY_OPTIONS} value={country} onChange={handleCountryChange} name={"Страна"} />
			</div>

			<div className={style.filters__form_group}>
				<FiltersRange valueFrom={yearFrom} valueTo={yearTo} setValueFrom={setYearFrom} setValueTo={setYearTo} name="Год" />

				<FiltersRange valueFrom={ratingFrom} valueTo={ratingTo} setValueFrom={setRatingFrom} setValueTo={setRatingTo} name="Рейтинг" />
			</div>

			<div className={style.filters__control}>
				<Button type="accent" children="Поиск" />
				<Button type="accent" onClick={handleClear} children="Очистить" />
			</div>
		</form>
	);
};
