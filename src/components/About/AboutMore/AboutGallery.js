import { Headline } from "../../Typography/Headline/Headline.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Lazy, Autoplay } from "swiper";
import "swiper/scss";
import style from "./AboutMore.module.scss";

export const AboutGallery = ({ images }) => {
	return (
		<div className={style.more_block}>
			<Headline level={3} className={style.more_block__headline}>
				кадры из фильма
			</Headline>

			<Swiper
				className={style.about_gallery__swiper}
				autoHeight={true}
				slidesPerView={1}
				centeredSlides={true}
				lazy={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				modules={[ Lazy, Autoplay]}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<img className="swiper-lazy" src={image.imageUrl} alt="gal" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
