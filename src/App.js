import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import {Header} from "./components/Header/Header.js";
import {HomePage} from "./pages/HomePage/HomePage.js";
import {FiltersPage} from "./pages/FiltersPage/FiltersPage.js";
import {MoviePage} from "./pages/MoviePage/MoviePage.js";
import {Test} from "./Test.js";
import {SearchPage} from "./pages/SearchPage/SearchPage.js";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />

				<main className='main'>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/search" element={<SearchPage />} />
						<Route path="/filters" element={<FiltersPage />} />
						<Route path="/film/:id/*" element={<MoviePage />} />
						<Route path="/test" element={<Test />} />
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
