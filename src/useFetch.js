import { useEffect, useState } from "react";

export const useFetch = (params) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	const URL = "https://kinopoiskapiunofficial.tech/api";

	// const API_KEY = "ef2d99ca-36a4-41df-8554-c168bd2cb00c";
	// const API_KEY = "642d88ed-a41b-4faa-8ee5-871d60cd7ad9";
	const API_KEY = "c46dc34a-42fe-4211-96df-a9bdfe289947";

	useEffect(() => {
		async function fetchData() {
			setIsPending(true);
			let res = await fetch(URL + params, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					"X-API-KEY": API_KEY,
				},
			});

			if (!res.ok) throw Error("could not fetch data for that resource");

			let json = await res.json();

			setData(json);
			setIsPending(false);
		}

		fetchData().catch((err) => {
			if (err.name === "AbortError") {
				console.log("fetch aborted");
			} else {
				setIsPending(false);
				setError(err.message);
			}
		});
	}, [params]);

	return { data, isPending, error };
};
