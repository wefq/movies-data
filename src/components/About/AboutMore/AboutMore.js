import { AboutDescription } from "./AboutDescription.js";
import { AboutFacts } from "./AboutFacts.js";
import { AboutGallery } from "./AboutGallery.js";
import style from "./AboutMore.module.scss";

export const AboutMore = ({ data }) => {
	console.log(data.images);
	return (
		data && (
			<div className={style.about_more}>
				<div className={style.about_more__main}>
					{data.movie.description && <AboutDescription description={data.movie.description} />}

					{data.facts.items.length > 0 && <AboutFacts facts={data.facts.items} />}
				</div>

				<div className={style.about_more__secondary}>
					<AboutGallery images={data.images.items} />
				</div>
			</div>
		)
	);
};
