import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { Section } from "../../components/Section/Section.js";
import { Loading } from "../../components/Loading/Loading.js";
import { MovieContainer } from "../../components/MovieContainer/MovieContainer.js";

export const SearchPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const paginate = (number) => {
		setCurrentPage(number);
	};

	const param = useLocation().state.stateParam;

	useEffect(()=>{
		setCurrentPage(1)
	},[param])

	const { data, isPending, error } = useFetch(`/films?keyword=${param}&page=${currentPage}`);

	return <Section>{isPending ? <Loading /> : <MovieContainer data={data} currentPage={currentPage} paginate={paginate} />}</Section>;
};
