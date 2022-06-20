import { useState, useEffect } from "react";
import FiltersSelect from "./FiltersSelect.js";
import FiltersRange from "./FiltersRange.js";
import Button from "../../../components/Button/Button.js";
import style from "./FiltersForm.module.scss";

const FiltersForm = ({ setCurrentPage, setParams }) => {
	const [FiltersForm, setFiltersForm] = useState(null);

	const [genre, setGenre] = useState(null);
	const [country, setCountry] = useState(null);

	const [yearFrom, setYearFrom] = useState("");
	const [yearTo, setYearTo] = useState("");

	const [ratingFrom, setRatingFrom] = useState("");
	const [ratingTo, setRatingTo] = useState("");

	useEffect(() => {
		async function fetchData() {
			let res = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/filters", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"X-API-KEY": "642d88ed-a41b-4faa-8ee5-871d60cd7ad9",
				},
			});

			if (!res.ok) throw Error("could not fetch data for that resource");

			let json = await res.json();

			setFiltersForm(json);
		}

		fetchData();
	}, []);

	const GENRE_OPTIONS = [];
	const COUNTRY_OPTIONS = [];

	FiltersForm && FiltersForm.genres.map((item) => GENRE_OPTIONS.push({ value: item.id, label: item.genre }));
	FiltersForm && FiltersForm.countries.map((item) => COUNTRY_OPTIONS.push({ value: item.id, label: item.country }));

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

		genre && fieldsValues.push({ paramName: "genres", paramId: genre.value });
		country && fieldsValues.push({ paramName: "countries", paramId: country.value });

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
		setGenre(null);
		setCountry(null);
		setYearFrom("");
		setYearTo("");
		setRatingFrom("");
		setRatingTo("");
	};

	return (
		<form className={style.filters_container + " container"} onSubmit={handleSubmit}>
			<div className={style.filters_container__form_group}>
				<FiltersSelect options={GENRE_OPTIONS} value={genre} onChange={handleGenreChange} name={"Жанр"} />

				<FiltersSelect options={COUNTRY_OPTIONS} value={country} onChange={handleCountryChange} name={"Страна"} />
			</div>

			<div className={style.filters_container__form_group}>
				<FiltersRange valueFrom={yearFrom} valueTo={yearTo} setValueFrom={setYearFrom} setValueTo={setYearTo} name="Год" />

				<FiltersRange valueFrom={ratingFrom} valueTo={ratingTo} setValueFrom={setRatingFrom} setValueTo={setRatingTo} name="Рейтинг" />
			</div>

			<div className={style.filters_container__control}>
				<Button type="submit" value="Поиск" />
				<Button type="button" onClick={handleClear} children="Очистить"/>
			</div>
		</form>
	);
};

export default FiltersForm;
