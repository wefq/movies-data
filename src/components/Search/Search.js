import { useState } from "react";
import useFetch from "../../useFetch";

const Search = () => {
	const [keyword, setKeyword] = useState("");

	return (
		<form>
			<input
				type="text"
				value={keyword}
				onChange={(e) => {
					setKeyword(e.target.value);
				}}
			/>
			<input type="submit" value="Поиск" />
		</form>
	);
};

export default Search;
