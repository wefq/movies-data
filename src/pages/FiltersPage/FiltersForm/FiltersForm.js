import { useState, useEffect } from "react";
import Select from "react-select";
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

	const GENRE_OPTIONS = [{ value: 0, label: "" }];
	const COUNTRY_OPTIONS = [{ value: 0, label: "" }];

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

	return (
		<form className={style.filters_container + " container"} onSubmit={handleSubmit}>
			<div>
				<label>Жанр</label>
				<Select value={genre} options={GENRE_OPTIONS} onChange={handleGenreChange} />
			</div>

			<div>
				<label>Страна</label>
				<Select value={country} options={COUNTRY_OPTIONS} onChange={handleCountryChange} />
			</div>

			<div>
				<label>Год</label>
				<div>
					<label>От</label>
					<input
						type="number"
						value={yearFrom}
						onChange={(e) => {
							setYearFrom(e.target.value);
						}}
					/>
				</div>

				<div>
					<label>До</label>
					<input
						type="number"
						value={yearTo}
						onChange={(e) => {
							setYearTo(e.target.value);
						}}
					/>
				</div>
			</div>

			<div>
				<label>Рейтинг</label>
				<div>
					<label>От</label>
					<input
						type="number"
						value={ratingFrom}
						onChange={(e) => {
							setRatingFrom(e.target.value);
						}}
					/>
				</div>

				<div>
					<label>До</label>
					<input
						type="number"
						value={ratingTo}
						onChange={(e) => {
							setRatingTo(e.target.value);
						}}
					/>
				</div>
			</div>

			<input type="submit" value="Поиск" />
		</form>
	);
};

export default FiltersForm;
