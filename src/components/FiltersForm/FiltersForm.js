import { useState } from "react";
import { FiltersSelect } from "./FiltersSelect.js";
import { FiltersRange } from "./FiltersRange.js";
import { Button } from "../Button/Button.js";
import style from "./FiltersForm.module.scss";

export const FiltersForm = ({ setCurrentPage, setParams, genresOptions, countriesOptions }) => {
	const [genre, setGenre] = useState("");
	const [country, setCountry] = useState("");

	const [yearFrom, setYearFrom] = useState("");
	const [yearTo, setYearTo] = useState("");

	const [ratingFrom, setRatingFrom] = useState("");
	const [ratingTo, setRatingTo] = useState("");

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

		const findGenre = genresOptions.find((item) => item.value === genre);
		const findCountry = countriesOptions.find((item) => item.value === country);

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
				<FiltersSelect options={genresOptions} value={genre} onChange={handleGenreChange} name={"Жанр"} />

				<FiltersSelect options={countriesOptions} value={country} onChange={handleCountryChange} name={"Страна"} />
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
