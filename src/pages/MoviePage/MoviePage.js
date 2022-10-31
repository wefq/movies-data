import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch.js";
import { useState } from 'react';
import { Section } from "../../components/Section/Section.js";
import { ContentLoaded } from "../../components/ContentLoaded/ContentLoaded.js";
import { AboutMain } from "../../components/About/AboutMain/AboutMain.js";
import { AboutMore } from "../../components/About/AboutMore/AboutMore.js";
import { useEffect } from "react";

export const MoviePage = () => {
	const [wait, setWait] = useState(true)
	const { id } = useParams();

	const { data: movie, isPending: moviePending, error: movieError } = useFetch(`/v2.2/films/${id}`);
	const { data: boxOffice, isPending: boxOfficePending, error: boxOfficeError } = useFetch(`/v2.2/films/${id}/box_office`);
	const { data: staff, isPending: staffPending, error: staffError } = useFetch(`/v1/staff?filmId=${id}`);
	// const { data: images, error: imagesError } = useFetch(`/v2.2/films/${id}/images?type=STILL&page=1`);
	const { data: awards, isPending: awardsPending, error: awardsError } = useFetch(`/v2.2/films/${id}/awards`);
	const { data: facts, isPending: factsPending, error: factsError } = useFetch(`/v2.2/films/${id}/facts`);

	useEffect(() => {
		if (moviePending && boxOfficePending && staffPending && factsPending && awardsPending) {
			console.log('all loaded')
			setWait(false)
		} else {
			console.log('still loading')
		}
	}, [moviePending, boxOffice, staffPending, awardsPending, factsPending])


	const main = { movie, boxOffice, staff };
	const more = { movie, facts, awards };

	return (
		<Section>
			{movie && boxOffice && staff && facts && awards && <ContentLoaded isPending={wait} >
				<AboutMain data={main} />
				<AboutMore data={more} />
			</ContentLoaded>}
		</Section>
	);
};
