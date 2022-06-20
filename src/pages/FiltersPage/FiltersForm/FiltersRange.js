import style from "./FiltersRange.module.scss";

const FiltersRange = ({ setValueFrom, setValueTo, valueFrom, valueTo, name }) => {
	return (
		<div className={style.filter_range}>
			<span>{name}</span>

			<input
				className={style.filter_range__input}
				type="number"
				placeholder="от"
				value={valueFrom}
				onChange={(e) => {
					setValueFrom(e.target.value);
				}}
			/>

			<input
				className={style.filter_range__input}
				type="number"
				placeholder="до"
				value={valueTo}
				onChange={(e) => {
					setValueTo(e.target.value);
				}}
			/>
		</div>
	);
};

export default FiltersRange;
