import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

import style from "./Test.module.scss";

export const Test = () => {
	const [data, setData] = useState('')

	useEffect(() => {
		async function getData() {
			await fetch('https://jsonplaceholder.typicode.com/todos/1')
				.then(response => response.json())
				.then(json => { setData(json) })
		}
		getData()
	}, [])

	data && console.log(data)

	return (
		<div>
			{data?.title}
		</div>
	);
};
