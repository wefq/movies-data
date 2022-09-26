import { AboutAwards } from "./AboutAwards.js";
import { AboutDescription } from "./AboutDescription.js";
import { AboutFacts } from "./AboutFacts.js";
import { AboutGallery } from "./AboutGallery.js";
import style from "./AboutMore.module.scss";

export const AboutMore = ({ data }) => {
	return (
			<div className={style.about_more}>
				<div className={style.about_more__main}>
					{data.movie.description && <AboutDescription description={data.movie.description} />}

					{data.facts.items.length > 0 && <AboutFacts facts={data.facts.items} />}
				</div>

				<div className={style.about_more__secondary}>
					{data.images.items.length > 0 && <AboutGallery images={data.images.items} />}
					{data.awards.items.length > 0 && <AboutAwards awards={data.awards.items} />}
				</div>
			</div>
	
	);
};
