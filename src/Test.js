import { useState } from "react";
import { useFetch } from "./useFetch";
import style from './Test.module.scss'

export const Test = () => {

	const {data, isPending, error} = useFetch(`/films/1252447`)

	return (
	<div>
		{data && <div className={style.box}>
			<img src={data.posterUrl} alt="" />
			<img src={data.posterUrlPreview} alt="" />
			<a href={data.webUrl}>Ссылка</a>
		</div>}
	</div>
	);
};
