import React from "react";
import { Route, useParams, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const MoviePage = () => {
	const { id } = useParams();

	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);

	async function fetchData(params) {
		let res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2${params}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"X-API-KEY": "ef2d99ca-36a4-41df-8554-c168bd2cb00c",
			},
		});

		if (!res.ok) throw Error("could not fetch data for that resource");

		let json = await res.json();

		setData(json);
	}

	useEffect(() => {
		console.log("fetching");
		fetchData(`/films/${id}`);
		setIsPending(false);
	}, []);

	return (
		<div>
			<h2>{id}</h2>
			{data && `${data.nameRu} / ${data.nameOriginal}`}
		</div>
	);
};

export default MoviePage;
