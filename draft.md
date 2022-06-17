// const URL = "https://kinopoiskapiunofficial.tech/api/v2.2/films?ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=2";

// const API_KEY = "ef2d99ca-36a4-41df-8554-c168bd2cb00c";

// const getData = () => {
// 	fetch(URL, {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json",
// 			"X-API-KEY": API_KEY,
// 		},
// 	})
// 		.then((res) => res.json())
// 		.then((data) => console.log(data))
// 		.catch((err) => console.log(err));
// };

// getData();



import { useState, useEffect } from "react";
import MovieContainer from "../../components/MovieContainer/MovieContainer.js";
import Pagination from "../../components/Pagination/Pagination.js";
import FiltersForm from "./FiltersForm/FiltersForm.js";

const FiltersPage = () => {
	const [params, setParams] = useState([]);
	const [data, setData] = useState(null);
	const [currentPage, setCurrentPage] = useState(1);

	async function fetchData(params) {
		let url = "https://kinopoiskapiunofficial.tech/api/v2.2/films?";
		let parameters = "";

		params.forEach((param) => {
			parameters = parameters + param.paramName + "=" + param.paramId + "&";
		});

		let res = await fetch(url + parameters + "page=" + currentPage, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-API-KEY": "ef2d99ca-36a4-41df-8554-c168bd2cb00c",
			},
		});

		if (!res.ok) throw Error("could not fetch data for that resource");

		let json = await res.json();
		setData(json);

		console.log(json);
	}

	const paginate = (number) => {
		setCurrentPage(number);
	};

	useEffect(() => {
		fetchData(params);
	}, [params, currentPage]);

	return (
		<section className="section">
			<FiltersForm setCurrentPage={setCurrentPage} setParams={setParams} />

			<MovieContainer data={data} />
			
			{data && <Pagination totalPages={data.totalPages} currentPage={currentPage} paginate={paginate} />}
		</section>
	);
};

export default FiltersPage;
